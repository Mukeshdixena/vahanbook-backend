import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleDocument } from './schemas/vehicle.schema';

@Injectable()
export class VehiclesService {
    constructor(
        @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
    ) { }

    async create(data: Partial<Vehicle>): Promise<Vehicle> {
        const vehicle = new this.vehicleModel(data);
        return vehicle.save();
    }

    async findAll(): Promise<Vehicle[]> {
        return this.vehicleModel.find().populate('owner', '-password').exec();
    }

    async findByOwner(ownerId: string): Promise<Vehicle[]> {
        return this.vehicleModel.find({ owner: ownerId }).exec();
    }
}
