import { randomInt } from "crypto";
import { Factory } from "nestjs-seeder";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: string;
    @Factory(faker => faker.lorem.words(2))
    @Column()
    title: string;
    
    @Factory(faker => faker.lorem.words(10))
    @Column()
    description: string;

    @Factory(faker => faker.image.imageUrl())
    @Column()
    image : string;

    @Factory(faker => randomInt(10, 100))
    @Column()
    price : number;
}