import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Booking } from '@prisma/client';

@Injectable()
export class BookingService {
    constructor(private prisma: PrismaService) { }

    async createBooking(userId: string, vehicleId: string, startDate: Date, endDate: Date): Promise<Booking> {
        return this.prisma.booking.create({
            data: {
                userId,
                vehicleId,
                startDate,
                endDate,
            },
        });
    }

    async getUserBookings(userId: string): Promise<Booking[]> {
        return this.prisma.booking.findMany({
            where: { userId },
            include: { vehicle: true },
        });
    }

    async getAllBookings(): Promise<Booking[]> {
        return this.prisma.booking.findMany({
            include: {
                user: true,
                vehicle: true,
            },
        });
    }
}
