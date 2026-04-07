import { Body, Post, Controller, HttpCode } from '@nestjs/common'
import { type UserDTOs } from '../../../../modules/User/application/dtos/UserDTOs'
import { UserService } from '../service/user.service'

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() data: UserDTOs.CreateUserDTO) {
    const user = await this.userService.createUser(data)
    return { user }
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() data: UserDTOs.LoginUserDTO) {
    const user = await this.userService.loginUser(data)
    return { user }
  }
}
