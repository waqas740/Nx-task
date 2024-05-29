import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsersExceptCurrentUser(current_user_id: string): Promise<User[]> {
    const users = this.userModel
      .find({
        _id: current_user_id,
      })
      .select({ _id: 1, email: 1, name: 1 });
    return users;
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }
}
