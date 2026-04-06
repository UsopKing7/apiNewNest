import { Module } from '@nestjs/common'
import { PrismaModule } from 'shared/config/prisma/prisma.module'
import { UserController } from './controller/user.controller'
import { UserService } from './service/user.service'
import { UserPrisma } from './prisma/user.prisma'
import { CreateUserUseCase } from '../application/usecase/create-user.usecase'
import { IUserInterface } from 'core/interfaces/user.interface'

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserUseCase,
    {
      provide: IUserInterface,
      useClass: UserPrisma
    }
  ]
})
export class UserModule {}
