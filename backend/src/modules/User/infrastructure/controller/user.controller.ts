import { Body, Post, Controller } from '@nestjs/common'
import { type UserDTOs } from '../../../../modules/User/application/dtos/UserDTOs'
import { UserService } from '../service/user.service'

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() data: UserDTOs.CreateUserDTO) {
    return await this.userService.createUser(data)
  }
}
