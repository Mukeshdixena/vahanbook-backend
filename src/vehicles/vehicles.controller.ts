import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './schemas/vehicle.schema';
import { UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createVehicle(@Body() data: Partial<Vehicle>, @Req() req) {
        const ownerId = req.user.sub; // sub = user.id from JWT payload
        return this.vehiclesService.create({ ...data, owner: ownerId });
    }

    @Get()
    async getAllVehicles() {
        return this.vehiclesService.findAll();
    }

    @Get('owner')
    async getVehiclesByOwner(@Query('id') ownerId: string) {
        return this.vehiclesService.findByOwner(ownerId);
    }
}
