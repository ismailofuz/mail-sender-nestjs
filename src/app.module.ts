import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailSenderModule } from './mail-sender/mail-sender.module';

@Module({
  imports: [MailSenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
