import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findByPhone(phone: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
