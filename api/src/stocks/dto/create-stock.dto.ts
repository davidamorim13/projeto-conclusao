import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateStockDto {
    @IsString()
    id: string;

    @IsNumber()
    amount: number;

    @IsDate()
    creatAt: Date;

    @IsString()
    productId: string;
}
