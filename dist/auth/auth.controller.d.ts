import { AuthService } from "./auth.service";
import { AuthDto2 } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto2): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
}
