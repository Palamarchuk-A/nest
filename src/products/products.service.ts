import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){}

    async getAll(): Promise<Product[]>{
        return this.productRepository.find();
    }
    async getById(id: string): Promise<Product>{
        return this.productRepository.findOne(id);
    }
}
