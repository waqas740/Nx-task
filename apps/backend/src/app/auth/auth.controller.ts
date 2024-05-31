import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register_user.dto';
import { LoginUserDto } from './dto/login_user.dto';

@ApiTags('api/auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 201,
    description: 'Login successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async login(@Request() req) {
    const { user } = req;
    return this.authService.login(user);
  }

  @Post('signup')
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @UsePipes(new ValidationPipe())
  async signup(@Request() req) {
    const { body: payload } = req;
    return this.authService.register(payload);
  }
}
