import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Kupon } from "./kupon.entity";

@Entity()
export class Campaign{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column()
    name:string;
    @OneToMany(()=>Kupon, (kupon)=>kupon.campaign)
    kupon:Kupon;

}