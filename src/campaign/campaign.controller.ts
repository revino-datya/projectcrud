import { Body, Controller, Post } from '@nestjs/common';
import { CreateCampaignDto } from './create-campaign.dto';

@Controller('campaign')
export class CampaignController {
    @Post("add")
    add(@Body() createCampaignDto : CreateCampaignDto){
        return createCampaignDto;
    }
}
