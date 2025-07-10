import { Controller, Post, Get, Body, Request, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('bookings')
@UseGuards(JwtAuthGuard)
export class BookingController {
    constructor(private readonly bookingService: BookingService) { }

    @Post()
    async bookVehicle(
        @Request() req,
        @Body() body: { vehicleId: string; startDate: string; endDate: string },
    ) {
        const { vehicleId, startDate, endDate } = body;
        return this.bookingService.createBooking(
            req.user.userId,
            vehicleId,
            new Date(startDate),
            new Date(endDate),
        );
    }

    @Get('me')
    async getUserBookings(@Request() req) {
        return this.bookingService.getUserBookings(req.user.userId);
    }

    @Get()
    async getAllBookings() {
        return this.bookingService.getAllBookings();
    }
}
