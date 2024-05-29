import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [ProductsModule, StocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
