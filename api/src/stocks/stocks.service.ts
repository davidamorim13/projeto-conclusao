import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  create(createStockDto: CreateStockDto) {
    return {
      id: 1,
      amount: 10,
      creatAt: new Date,
      productId: 1,
    }
  }

  findAll() {
    return [
      {
        id: 1,
        amount: 10,
        creatAt: new Date,
        productId: 1
      },
      {
        id: 2,
        amount: 10,
        creatAt: new Date,
        productId: 2,
      }
    ]
  }

  findOne(id: number) {
    return {
      id: id,
      amount: 10,
      creatAt: new Date,
      productId: 1
    }
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return {
      id: 1,
      amount: 10,
      creatAt: new Date,
      productId: 1
    }
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
