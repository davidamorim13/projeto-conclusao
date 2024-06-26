import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return {
        name: "Alface Americana",
        price: "2,50",
        code:"789",
        ean: "7891912",
        createdAt: new Date,
        updateAt: new Date,
      }
  }

  findAll() {
    return [
      {
        name: "Alface Americana",
        price: "2,50",
        code:"789",
        ean: "7891912",
        createdAt: new Date,
        updateAt: new Date,
      },
      {
        name: "Tomate",
        price: "3",
        code: "123",
        ean: "123456789",
        createdAt: new Date,
        updateAt: new Date,
      },
      {
        name: "Maçã",
        price: "3",
        code: "123",
        ean: "123456789",
        createdAt: new Date,
        updateAt: new Date,
      }
    ]
  }

  findOne(id: number) {
    return {
      id: id,
      name: "Alface Americana",
      price: "2,50",
      code:"789",
      ean: "7891912",
      createdAt: new Date,
       updateAt: new Date,
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return {
      name: "Alface Americana",
      price: "2,50",
      code:"789",
      ean: "7891912",
      createdAt: new Date,
      updateAt: new Date,
    }
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
