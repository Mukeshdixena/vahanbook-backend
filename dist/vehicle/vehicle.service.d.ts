import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class VehicleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.VehicleCreateInput): Prisma.Prisma__VehicleClient<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        type: string;
        image: string | null;
        price: number;
        location: string;
        available: boolean;
        ownerId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findAll(): Prisma.PrismaPromise<({
        owner: {
            name: string;
            id: string;
            phone: string;
            email: string | null;
            password: string;
            role: string;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        type: string;
        image: string | null;
        price: number;
        location: string;
        available: boolean;
        ownerId: string;
    })[]>;
    findByOwner(ownerId: string): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        type: string;
        image: string | null;
        price: number;
        location: string;
        available: boolean;
        ownerId: string;
    }[]>;
    findOne(id: string): Prisma.Prisma__VehicleClient<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        type: string;
        image: string | null;
        price: number;
        location: string;
        available: boolean;
        ownerId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
