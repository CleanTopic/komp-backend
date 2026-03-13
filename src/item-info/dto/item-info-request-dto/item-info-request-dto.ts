import { IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemDto } from "./item-dto";

export class ItemInfoRequestDto {

  @IsString()
  offerId!: string;

  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items!: ItemDto[];

}