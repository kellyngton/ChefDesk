import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ChefDesk API')
    .setDescription('Documentação da API do ChefDesk')
    .setVersion('1.0')
    .addTag('chefdesk')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  const port = Number(process.env.PORT) || 3000;

  await app.listen(port);
}

void bootstrap();
