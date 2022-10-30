import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateMailSenderDto } from './dto/create-mail-sender.dto';

@Injectable()
export class MailSenderService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(user: CreateMailSenderDto, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Hello world!',
      template: 'confirmation',
      context: {
        name: user.name,
        url,
      },
    });
  }

  async signUp(user: CreateMailSenderDto) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    await this.sendEmail(user, token);
  }

}
