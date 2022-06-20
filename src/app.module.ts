import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { CampaignModule } from './campaign/campaign.module';
import { Campaign } from './campaign/entity/campaign.entity';
import { Kupon } from './campaign/entity/kupon.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'kupon',
    entities: [User,Campaign,Kupon],
    synchronize: true,
  }), UserModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
