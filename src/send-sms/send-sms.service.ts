import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class SendSmsService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
    @InjectKnex() private readonly knex: Knex,
  ) {}

  async generate_token() {
    const data = await this.httpService.axiosRef.post(
      this.config.get('sms.login_url'),
      {
        email: this.config.get('sms.email'),
        password: this.config.get('sms.password'),
      },
    );
    const token = data.data['data']['token'];
    if (token) {
      return {
        token,
      };
    }
    return {
      status: false,
      message: 'Wrong creadentials or any other error!',
    };
  }

  async send_sms(token: string, message: string, phone: string) {
    await this.httpService.axiosRef.post(
      this.config.get('SMS_SEND_URL'),
      {
        mobile_phone: phone,
        message: message,
        from: 4546,
        callback_url: 'http://0000.uz/test.php',
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  }

  async sendSms(phone, user_id: number) {
    const code = Math.floor(100000 + Math.random() * 900000);
    await this.knex('verifications').insert({
      code,
      user_id: user_id,
      expires_at: new Date(Date.now() + 300000),
    });
    const smsAccessToken = await this.generate_token();
    await this.send_sms(
      smsAccessToken.token,
      `Your verification code:} ${code}`,
      phone.substring(1),
    );
  }
}
