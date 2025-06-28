import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingsService {
    constructor(
        @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
    ) { }

    async bookVehicle(data: {
        user: string;
        vehicle: string;
        fromDate: Date;
        toDate: Date;
    }): Promise<Booking> {
        const { vehicle, fromDate, toDate } = data;

        const conflict = await this.bookingModel.findOne({
            vehicle,
            $or: [
                { fromDate: { $lte: toDate }, toDate: { $gte: fromDate } },
                { fromDate: { $lte: fromDate }, toDate: { $gte: toDate } },
            ],
        });

        if (conflict) {
            throw new ConflictException('This vehicle is already booked for these dates');
        }

        const booking = new this.bookingModel(data);
        return booking.save();
    }

    async getBookingsByUser(userId: string): Promise<Booking[]> {
        return this.bookingModel.find({ user: userId }).populate('vehicle').exec();
    }

    async getBookingsByVehicle(vehicleId: string): Promise<Booking[]> {
        return this.bookingModel.find({ vehicle: vehicleId }).populate('user').exec();
    }
}
