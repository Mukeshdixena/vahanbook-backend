import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 👈 Add this
import { ConfigModule } from '@nestjs/config';      // 👈 Optional, for .env
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 👈 Loads .env variables
    MongooseModule.forRoot(process.env.MONGO_URI!), // 👈 Connects MongoDB
    UsersModule, AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
