import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo retorna la data que se necesita, si se manda mas de la que se requiere no la muestra
      forbidNonWhitelisted: true // si hay mas data da error
    })
  )




  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
