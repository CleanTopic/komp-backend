import { Body, Controller, Post } from '@nestjs/common';
import { ItemInfoService } from './item-info.service';

@Controller('item-info')
export class ItemInfoController {

    constructor( private readonly itemInfoService: ItemInfoService) { }

    @Post('item-info')
    async getItemInfo(
        @Body() body: any
    ) {
        return await this.itemInfoService.getItemInfo();
    }


}
