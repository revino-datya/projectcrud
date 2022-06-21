import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
    @Post("register")
    register(@Body() createUserDto : CreateUserDto){
        return createUserDto;
    }

}
