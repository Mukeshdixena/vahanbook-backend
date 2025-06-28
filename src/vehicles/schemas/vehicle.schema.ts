import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type VehicleDocument = Vehicle & Document;

@Schema({ timestamps: true })
export class Vehicle {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    type: string; // e.g., 'tractor', 'bike'

    @Prop({ required: true })
    rentPerDay: number;

    @Prop({ default: true })
    available: boolean;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    owner: User;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
