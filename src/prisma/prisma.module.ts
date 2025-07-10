import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({

  providers: [PrismaService],
  exports: [PrismaService], // 👈 this allows other modules to use PrismaService
})
export class PrismaModule { }
