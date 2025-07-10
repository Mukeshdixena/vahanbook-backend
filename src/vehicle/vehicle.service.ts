// src/vehicle/vehicle.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VehicleService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.VehicleCreateInput) {
        return this.prisma.vehicle.create({ data });
    }

    findAll() {
        return this.prisma.vehicle.findMany({ include: { owner: true } });
    }

    findByOwner(ownerId: string) {
        return this.prisma.vehicle.findMany({ where: { ownerId } });
    }

    findOne(id: string) {
        return this.prisma.vehicle.findUnique({ where: { id } });
    }
}
