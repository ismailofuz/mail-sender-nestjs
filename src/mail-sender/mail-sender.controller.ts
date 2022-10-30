import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { CreateMailSenderDto } from './dto/create-mail-sender.dto';
import { MailSenderService } from './mail-sender.service';

@Controller('mail-sender')
export class MailSenderController {
  constructor(private readonly mailSenderService: MailSenderService) {}

  @Post()
  create(@Body() user: CreateMailSenderDto) {
    return this.mailSenderService.signUp(user)
  }
}
