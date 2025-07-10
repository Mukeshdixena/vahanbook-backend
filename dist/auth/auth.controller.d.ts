import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
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
    login(body: {
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
