// src/vehicle/vehicle.controller.ts
import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() body, @Req() req) {
        return this.vehicleService.create({
            ...body,
            owner: { connect: { id: req.user.userId } },
        });
    }

    @Get()
    findAll() {
        return this.vehicleService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('mine')
    findMine(@Req() req) {
        return this.vehicleService.findByOwner(req.user.userId);
    }
}
