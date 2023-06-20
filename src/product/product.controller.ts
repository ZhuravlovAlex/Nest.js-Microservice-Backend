import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productService.get(id);
  }

  // @Post()
  // async create(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  //   @Body('image') image: string,
  // ) {
  //   return this.productService.create({
  //     title,
  //     description,
  //     image,
  //   });
  // }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  async update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: number, // @Param('id') id: number,
  ) // @Body('title') title: string,
  // @Body('description') description: string,
  // @Body('image') image: string,
  {
    return this.productService.update(
      id,
      updateProductDto,
      //   {
      //   title,
      //   description,
      //   image,
      // }
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
