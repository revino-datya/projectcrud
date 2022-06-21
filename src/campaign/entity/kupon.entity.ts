import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Campaign } from "./campaign.entity";

@Entity()
export class Kupon{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column()
    name:string;
    @ManyToOne(() => Campaign)
    campaign: Campaign;
}