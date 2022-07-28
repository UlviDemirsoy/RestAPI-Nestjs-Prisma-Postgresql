import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto2 } from "./dto";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService ){}
    signin(){
        return {msg: 'i have signedin...'}
    }

    signup(dto: AuthDto2){
        return {msg: 'i have signedup...'}
    }
}