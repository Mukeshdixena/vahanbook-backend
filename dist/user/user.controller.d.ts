import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: any): Promise<{
        name: string;
        id: string;
        phone: string;
        email: string | null;
        password: string;
        role: string;
        createdAt: Date;
    }>;
    getAllUsers(): Promise<{
        name: string;
        id: string;
        phone: string;
        email: string | null;
        password: string;
        role: string;
        createdAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        name: string;
        id: string;
        phone: string;
        email: string | null;
        password: string;
        role: string;
        createdAt: Date;
    } | null>;
    getUserByEmail(email: string): Promise<{
        name: string;
        id: string;
        phone: string;
        email: string | null;
        password: string;
        role: string;
        createdAt: Date;
    } | null>;
}
