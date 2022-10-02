import { Injectable } from '@nestjs/common';
import { CreateMailSenderDto } from './dto/create-mail-sender.dto';
import { UpdateMailSenderDto } from './dto/update-mail-sender.dto';

@Injectable()
export class MailSenderService {
  create(createMailSenderDto: CreateMailSenderDto) {
    return 'This action adds a new mailSender';
  }

  findAll() {
    return `This action returns all mailSender`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailSender`;
  }

  update(id: number, updateMailSenderDto: UpdateMailSenderDto) {
    return `This action updates a #${id} mailSender`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailSender`;
  }
}
