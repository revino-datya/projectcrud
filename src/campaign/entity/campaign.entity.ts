import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column()
    name:string;
}