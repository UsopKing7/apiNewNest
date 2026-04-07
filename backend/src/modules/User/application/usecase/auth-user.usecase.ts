import { IUserInterface } from 'core/interfaces/user.interface'
import { UserDTOs } from '../dtos/UserDTOs'
import { Password } from 'core/value-objects/Password'
import { UserErrors } from 'core/errors/user.error'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthUserUseCase {
  constructor(private readonly userRepo: IUserInterface) {}

  async execute(data: UserDTOs.LoginUserDTO): Promise<UserDTOs.UserResponseDTO> {
    const user = await this.ensureEmailExists(data.email)
    const passwordVO = new Password(user.getPassword)
    const isPasswordValid = await passwordVO.comparePassword(data.password)

    if (!isPasswordValid) throw new UserErrors.InvalidCredentialsError()
    return user.getPublicData
  }

  private async ensureEmailExists(email: string) {
    const user = await this.userRepo.findByUserForEmail(email)
    if (!user) throw new UserErrors.InvalidCredentialsError()
    return user
  }
}
