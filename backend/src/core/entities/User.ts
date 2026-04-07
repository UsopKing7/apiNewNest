import { UserDTOs } from 'modules/User/application/dtos/UserDTOs'
import { Password } from '../value-objects/Password'
import { Username } from '../value-objects/Username'

export class User {
  constructor(
    public username: Username,
    public email: string,
    private readonly password: Password,
    public readonly id_user?: string
  ) {}

  get getPublicData(): UserDTOs.UserResponseDTO {
    return {
      id_user: this.id_user!,
      username: this.username.value,
      email: this.email
    }
  }

  get getPassword(): string {
    return this.password.getValue
  }
}
