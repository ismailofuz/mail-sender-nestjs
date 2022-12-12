import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';
import { DatabaseConfig } from './database';
import { MailSenderModule } from './mail-sender/mail-sender.module';
import { SendSmsModule } from './send-sms/send-sms.module';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailSenderModule,
    SendSmsModule,
  ],
})
export class AppModule {}
