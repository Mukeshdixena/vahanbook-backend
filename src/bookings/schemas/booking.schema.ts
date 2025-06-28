import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Vehicle } from '../../vehicles/schemas/vehicle.schema';

export type BookingDocument = Booking & Document;

@Schema({ timestamps: true })
export class Booking {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: User;

    @Prop({ type: Types.ObjectId, ref: 'Vehicle', required: true })
    vehicle: Vehicle;

    @Prop({ required: true })
    fromDate: Date;

    @Prop({ required: true })
    toDate: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
