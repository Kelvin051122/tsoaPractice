import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { injectable } from "inversify";
@injectable()
@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id?: number
 
    @Column()
    name: string
 
    @Column()
    age: number
}