import { Module } from '@nestjs/common';
import { ItemInfoService } from './item-info.service';
import { ItemInfoController } from './item-info.controller';

@Module({
  providers: [ItemInfoService],
  controllers: [ItemInfoController]
})
export class ItemInfoModule {}
