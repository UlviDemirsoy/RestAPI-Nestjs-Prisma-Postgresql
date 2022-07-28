import { Body, Controller, ParseIntPipe, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express';
import { AuthDto, AuthDto2 } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(
        @Body() dto: AuthDto2,
         
         ) { 
        console.log({
            
            dto,

        });
        return this.authService.signup(dto);
    }

   /*  signup(
        @Body('email') email: string,
         @Body('password', ParseIntPipe) password: string,
         ) { 
        console.log({
            email,
            typeOfEmail: typeof email,
            password,
            typeOfPassword: typeof password,

        });
        return this.authService.signup();
    } */

    // signup(@Req () req: Request){
    //    console.log(req.body);
    //    return this.authService.signup();
    // }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }


}