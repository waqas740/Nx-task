import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@ApiTags('api/users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth('Authorization')
  async getUsers(@Request() req) {
    const { user } = req;
    return this.usersService.getUsersExceptCurrentUser(user._id);
  }
}
