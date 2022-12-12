import { Module } from '@nestjs/common';
import { SendSmsService } from './send-sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [SendSmsService],
})
export class SendSmsModule {}
