import { User } from '../../../../core/entities/User'
import { UserDTOs } from '../dtos/UserDTOs'
import { Username } from '../../../../core/value-objects/Username'
import { Password } from '../../../../core/value-objects/Password'
import { IUserInterface } from '../../../../core/interfaces/user.interface'
import { UserErrors } from '../../../../core/errors/user.error'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepo: IUserInterface) {}
  async execute(data: UserDTOs.CreateUserDTO): Promise<UserDTOs.UserResponseDTO> {
    await this.ensureUsernameDoesNotExist(data.username)
    await this.ensureEmailDoesNotExist(data.email)

    const usernameVO = new Username(data.username)
    const passwordVO = new Password(data.password)
    const passwordHash = await passwordVO.hashPassword()
    const passwordFromHash = Password.fromHash(passwordHash)

    const user = new User(usernameVO, data.email, passwordFromHash)

    const userCreated = await this.userRepo.create(user)
    return userCreated.getPublicData
  }

  private async ensureUsernameDoesNotExist(username: string) {
    const usernameExists = await this.userRepo.findByUsername(username)
    if (usernameExists) throw new UserErrors.UsernameAlreadyExistsError()
  }

  private async ensureEmailDoesNotExist(email: string) {
    const emailExists = await this.userRepo.findByEmail(email)
    if (emailExists) throw new UserErrors.EmailAlreadyExistsError()
  }
}
