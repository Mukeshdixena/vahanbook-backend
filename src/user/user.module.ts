import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller'; // ✅ Add this
import { PrismaModule } from '../prisma/prisma.module'; // or wherever PrismaService is

@Module({
  imports: [PrismaModule], // ✅ Ensure PrismaService is imported
  providers: [UserService],
  controllers: [UserController], // ✅ Register the controller
  exports: [UserService], // So it can be used in AuthModule
})
export class UserModule { }
