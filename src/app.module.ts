import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { ItemInfoModule } from './item-info/item-info.module';

@Module({
  imports: [PdfModule, ItemInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
