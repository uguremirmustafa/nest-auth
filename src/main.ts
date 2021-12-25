import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use global pipe for validation
  app.useGlobalPipes(new ValidationPipe());

  // create swagger documentation for the API
  const config = new DocumentBuilder()
    .setTitle('Docs for my Nest API')
    .setDescription('My lovely API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(4000);
}
bootstrap();
