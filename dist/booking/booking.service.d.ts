import { PrismaService } from '../prisma/prisma.service';
import { Booking } from '@prisma/client';
export declare class BookingService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(userId: string, vehicleId: string, startDate: Date, endDate: Date): Promise<Booking>;
    getUserBookings(userId: string): Promise<Booking[]>;
    getAllBookings(): Promise<Booking[]>;
}
