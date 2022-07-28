import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto2 } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(): {
        msg: string;
    };
    signup(dto: AuthDto2): {
        msg: string;
    };
}
