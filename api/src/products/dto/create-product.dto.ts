import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    
    @IsNumber()
    price: number;

    @IsNumber()
    code: number;

    @IsNumber()
    ean: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
