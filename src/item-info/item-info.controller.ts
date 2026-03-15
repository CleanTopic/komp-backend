import { Body, Controller, Post } from '@nestjs/common';
import { ItemInfoService } from './item-info.service';
import { ItemInfoRequestDto } from './dto/item-info-request-dto/item-info-request-dto';

@Controller('item-info')
export class ItemInfoController {

    constructor( private readonly itemInfoService: ItemInfoService) { }

    @Post('getInfoItem')
    async getItemInfo(
        @Body('body') body: ItemInfoRequestDto
    ) {
        return await this.itemInfoService.getItemInfo(body);
    }


}
