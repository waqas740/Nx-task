import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register_user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    try {
      registerUserDto.password = await bcrypt.hash(
        registerUserDto.password,
        10
      );
      const newUser = new this.userModel(registerUserDto);
      return newUser.save();
    } catch (error) {
      if (error.message.includes('duplicate key error')) {
        // Handle the duplicate key violation error
        throw new UnprocessableEntityException('Email already exists');
      } else {
        throw error;
      }
    }
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
