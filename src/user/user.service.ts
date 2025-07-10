import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async findByPhone(phone: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { phone } });
    }

    async findById(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
}
