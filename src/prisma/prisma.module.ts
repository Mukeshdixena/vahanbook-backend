import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({

  providers: [PrismaService],
  exports: [PrismaService], // 👈 this allows other modules to use PrismaService
})
export class PrismaModule { }
