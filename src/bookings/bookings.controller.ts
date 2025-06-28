import { Controller, Post, Body, Get, Query, UseGuards, Req } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createBooking(@Body() body, @Req() req) {
        const userId = req.user.sub;
        const { vehicle, fromDate, toDate } = body;

        return this.bookingsService.bookVehicle({
            user: userId,
            vehicle,
            fromDate: new Date(fromDate),
            toDate: new Date(toDate),
        });
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    async getUserBookings(@Req() req) {
        return this.bookingsService.getBookingsByUser(req.user.sub);
    }

    @Get('vehicle')
    async getVehicleBookings(@Query('id') vehicleId: string) {
        return this.bookingsService.getBookingsByVehicle(vehicleId);
    }
}
