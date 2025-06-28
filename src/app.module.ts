import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 👈 Add this
import { ConfigModule } from '@nestjs/config';      // 👈 Optional, for .env
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 👈 Loads .env variables
    MongooseModule.forRoot(process.env.MONGO_URI!), // 👈 Connects MongoDB
    UsersModule, AuthModule, VehiclesModule, BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
