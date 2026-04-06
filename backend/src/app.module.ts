import { Module } from '@nestjs/common'
import { PrismaModule } from './shared/config/prisma/prisma.module'
import { UserModule } from './modules/User/infrastructure/user.module'

@Module({
  imports: [PrismaModule, UserModule]
})
export class AppModule {}
