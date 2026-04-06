import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { env } from './shared/const/env'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)
  app.enableShutdownHooks()
  await app.listen(env.PORT)
  console.table({
    URL: `http://localhost:${env.PORT}`
  })
}

void bootstrap()
