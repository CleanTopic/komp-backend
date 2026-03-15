import { IsString, IsArray, IsInt } from "class-validator";

export class ItemInfoRequestDto {

  @IsString()
  offerUUID!: string;

  @IsArray()
  @IsInt({ each: true })
  items!: number[];
}