import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export interface AuthDto {
    email: string;
    password: string;
}

export class AuthDto2{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}