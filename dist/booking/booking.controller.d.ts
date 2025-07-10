import { BookingService } from './booking.service';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    bookVehicle(req: any, body: {
        vehicleId: string;
        startDate: string;
        endDate: string;
    }): Promise<{
        vehicleId: string;
        startDate: Date;
        endDate: Date;
        id: string;
        userId: string;
        createdAt: Date;
    }>;
    getUserBookings(req: any): Promise<{
        vehicleId: string;
        startDate: Date;
        endDate: Date;
        id: string;
        userId: string;
        createdAt: Date;
    }[]>;
    getAllBookings(): Promise<{
        vehicleId: string;
        startDate: Date;
        endDate: Date;
        id: string;
        userId: string;
        createdAt: Date;
    }[]>;
}
