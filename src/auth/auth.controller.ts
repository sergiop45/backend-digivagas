import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequest } from './interfaces/AuthRequest';
import { IsPublic } from './decorators/ispublic.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @IsPublic()
    
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest) {
        return this.authService.login(req.user);
    }

    
}