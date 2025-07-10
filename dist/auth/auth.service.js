"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userService;
    jwt;
    constructor(userService, jwt) {
        this.userService = userService;
        this.jwt = jwt;
    }
    async register(data) {
        const exists = await this.userService.findByEmail(data.email);
        if (exists)
            throw new common_1.ConflictException('User already exists');
        const hashed = await bcrypt.hash(data.password, 10);
        const user = await this.userService.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashed,
            role: 'customer',
        });
        return { message: 'Registered', user };
    }
    async login(data) {
        const user = await this.userService.findByEmail(data.email);
        if (!user || !user.password)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const payload = { sub: user.id, email: user.email };
        const token = this.jwt.sign(payload);
        return { access_token: token, user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map