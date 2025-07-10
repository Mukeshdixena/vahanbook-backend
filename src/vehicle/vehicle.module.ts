import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { PrismaModule } from '../prisma/prisma.module'; // adjust path if needed
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [PrismaModule], // ✅ Add this
  providers: [VehicleService],
  controllers: [VehicleController],
  exports: [VehicleService], // (optional if used elsewhere)
})
export class VehicleModule { }
