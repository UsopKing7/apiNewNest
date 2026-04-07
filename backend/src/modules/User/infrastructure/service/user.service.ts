import { Injectable } from '@nestjs/common'
import { UserDTOs } from '../../../../modules/User/application/dtos/UserDTOs'
import { CreateUserUseCase } from '../../../../modules/User/application/usecase/create-user.usecase'
import { AuthUserUseCase } from 'modules/User/application/usecase/auth-user.usecase'

@Injectable()
export class UserService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly AuthUseCase: AuthUserUseCase
  ) {}

  async createUser(data: UserDTOs.CreateUserDTO) {
    return await this.createUserUseCase.execute(data)
  }

  async loginUser(data: UserDTOs.LoginUserDTO) {
    return await this.AuthUseCase.execute(data)
  }
}
