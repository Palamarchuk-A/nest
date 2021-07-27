import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}
    
    @Get()
    public async getall(){
        return await this.productService.getAll();
    }

    @Get(':id')
    public async getOne(@Param('id') id: string): Promise<Product>{
        return await this.productService.getById(id);
    }
    @Post()
    public async create(@Body() createProductDto: CreateProductDto): Promise<Product>{
        return await this.productService.create(createProductDto);
    }

}
