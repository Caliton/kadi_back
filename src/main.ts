import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { EntityNotFoundExceptionFilter } from './core/exception-filters/entity-not-found.exception-filter';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Kadi')
    .setDescription('The Kadi API documentation')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api');
  app.enableCors();

  // app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
