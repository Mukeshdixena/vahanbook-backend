import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwt;
    constructor(userService: UserService, jwt: JwtService);
    register(data: {
        name: string;
        email: string;
        phone: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            name: string;
            id: string;
            phone: string;
            email: string | null;
            password: string;
            role: string;
            createdAt: Date;
        };
    }>;
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            name: string;
            id: string;
            phone: string;
            email: string | null;
            password: string;
            role: string;
            createdAt: Date;
        };
    }>;
}
