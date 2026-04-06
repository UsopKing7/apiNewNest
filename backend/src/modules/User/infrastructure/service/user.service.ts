import { Injectable } from '@nestjs/common'
import { UserDTOs } from '../../../../modules/User/application/dtos/UserDTOs'
import { CreateUserUseCase } from '../../../../modules/User/application/usecase/create-user.usecase'

@Injectable()
export class UserService {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(data: UserDTOs.CreateUserDTO) {
    return await this.createUserUseCase.execute(data)
  }
}
