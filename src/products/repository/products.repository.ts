import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../products.entity";

@EntityRepository(Product)

export class ProductsRepository extends Repository<Product>{

    public async findAll(): Promise<Product[]>{
        return await this.find({});
    }
    public async findById(id: string): Promise<Product>{
        return await this.findOne(id);
    }
    public async createProduct(createProductDto: CreateProductDto):Promise<Product>{
        const {title, price}  = createProductDto;
        const product = new Product();
        product.title = title;
        product.price = price;

        await this.save(product);
        return product;

    }
}