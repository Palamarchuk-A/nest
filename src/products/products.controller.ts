import { Controller,Get, Param } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}
    
    @Get()
    async getall(){
        return this.productService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product>{
        return this.productService.getById(id);
    }

}
