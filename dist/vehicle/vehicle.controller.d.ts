import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    create(body: any, req: any): import(".prisma/client").Prisma.Prisma__VehicleClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
    findMine(req: any): import(".prisma/client").Prisma.PrismaPromise<{
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
}
