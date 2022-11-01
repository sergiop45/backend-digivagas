import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService){}
    
    async validateUser(username: string, pass: string) {
        console.log("teste")
}
}