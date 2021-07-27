import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.entity';
import { ProductsRepository } from './repository/products.repository';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository) private productRepository: ProductsRepository
    ){}

    async getAll(): Promise<Product[]>{
        return await this.productRepository.findAll();
    }
    async getById(id: string): Promise<Product>{
        return await this.productRepository.findById(id);
    }
    async create(productDto: CreateProductDto): Promise<Product>{
        return await this.productRepository.createProduct(productDto);
      
    }
}
