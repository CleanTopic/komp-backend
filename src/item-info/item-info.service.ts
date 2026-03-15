import { Injectable } from '@nestjs/common';
import { ItemInfoRequestDto } from './dto/item-info-request-dto/item-info-request-dto';



/* Здесь будет происходить запрос к 1С с возвратом JSON инфорации о товаре в заказе, принимает UUID заказа, а так же индексы товара*/
@Injectable()
export class ItemInfoService {

    async getItemInfo(items: ItemInfoRequestDto) {


        /* То что должно возвращаться от 1С */
        return {
            manager: 'Абобус обыкновенный',
            items: [{
                id: 1,
                name: 'Багет-13',
                name_1c: 'Багет-13 Макиато ПЭТ ДГ 2000*800 (91)',
                quantity: 1,
                discount: 20,
                coating : 'coating type',
                thinkness: 'thinkness value',
                molding: 'molding type',
                size: 'size value',
                color: 'color value',
                door_type: 'door type value',
                manufacturer: 'manufacturer value',
                discount_price: 1000,
                new_price: 4000,
                old_price: 5000,
                picUrl: 'https://optovikk.ru/catalog/vkhodnye-dveri/dlya-doma/astra-bukle-grafit-belyy-matovyy-860kh2050-levaya/#img-2',
            }],
            totals : {
                position_quantity: 1,
                total_price: 4000,
                total_discount_price: 1000,
                total_old_price: 5000,
                last_day_offer: '2024-06-30',
            }
        }


        
    }
}
