import { User } from '../../../../core/entities/User'
import { Password } from '../../../../core/value-objects/Password'
import { IUserInterface } from '../../../../core/interfaces/user.interface'
import { Username } from '../../../../core/value-objects/Username'
import { PrismaService } from '../../../../shared/config/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserPrisma implements IUserInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: User): Promise<User> {
    const createdUser = await this.prisma.db.user.create({
      data: {
        username: data.username.getValue,
        email: data.email,
        password: data.getPassword
      }
    })

    return new User(
      new Username(createdUser.username),
      createdUser.email,
      new Password(createdUser.password),
      createdUser.id_user
    )
  }

  async findByEmail(email: string): Promise<boolean> {
    const user = await this.prisma.db.user.findUnique({
      where: {
        email
      }
    })

    return !!user
  }

  async findByUsername(username: string): Promise<boolean> {
    const user = await this.prisma.db.user.findUnique({
      where: {
        username
      }
    })

    return !!user
  }

  async findByUserForEmail(email: string): Promise<User | null> {
    const user = await this.prisma.db.user.findUnique({
      where: { email }
    })

    return user
      ? new User(new Username(user.username), user.email, new Password(user.password), user.id_user)
      : null
  }
}
