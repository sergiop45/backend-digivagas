import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './interfaces/UserToken';
import { PayloadUser } from './interfaces/PayloadUser';
import { User } from '@prisma/client';


@Injectable()
export class AuthService {

    constructor(
                private readonly usersService: UsersService,
                private readonly jwtService: JwtService
                ){}
    
                login(user: User): UserToken {

                    const payload: PayloadUser = {
                        sub: user.id,
                        email: user.email,
                    }
            
                    const Token = this.jwtService.sign(payload);
            
                    return {
                        access_token: Token,
                    }
            
        
                }
                
            
                async validateUser(email: string, password: string) {
            
                    const user = await this.usersService.findByEmail(email);
            
                    if(user) {
                       
                        const isPassIsValid = await bcrypt.compare(password, user.password);
            
                        if (isPassIsValid) {
                            
                            return {
                                ...user,
                                password: undefined,
                            }
            
                        } 
            
                    }
            
                    throw new Error('Email or Password is incorret')
                }
}