import { User } from '../../core/entities/User'

export abstract class IUserInterface {
  abstract create(data: User): Promise<User>
  abstract findByUsername(username: string): Promise<boolean>
  abstract findByEmail(email: string): Promise<boolean>
  abstract findByUserForEmail(email: string): Promise<User | null>
}
