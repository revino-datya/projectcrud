import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kupon{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column()
    name:string;
}