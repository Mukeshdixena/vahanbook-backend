import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ import PrismaModule


@Module({
  imports: [PrismaModule],
  providers: [BookingService],
  controllers: [BookingController]
})
export class BookingModule { }
