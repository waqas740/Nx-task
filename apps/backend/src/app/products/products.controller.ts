import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@ApiTags('api/products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  @UsePipes(new ValidationPipe())
  @ApiBearerAuth('Authorization')
  async getProducts(@Request() req) {
    return this.productsService.getProducts();
  }
}
