import { TypeOrmModule } from "@nestjs/typeorm";
import { seeder } from "nestjs-seeder";
import { Product } from "./products.entity";
import { ProductsSeeder } from "./products.seeder";

seeder({
    imports:[
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
        entities: [Product],
        synchronize: true,
        }),
        TypeOrmModule.forFeature([Product])
    ]
}).run([ProductsSeeder]);