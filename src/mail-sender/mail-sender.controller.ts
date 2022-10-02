import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailSenderService } from './mail-sender.service';
import { CreateMailSenderDto } from './dto/create-mail-sender.dto';
import { UpdateMailSenderDto } from './dto/update-mail-sender.dto';

@Controller('mail-sender')
export class MailSenderController {
  constructor(private readonly mailSenderService: MailSenderService) {}

  @Post()
  create(@Body() createMailSenderDto: CreateMailSenderDto) {
    return this.mailSenderService.create(createMailSenderDto);
  }

  @Get()
  findAll() {
    return this.mailSenderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailSenderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailSenderDto: UpdateMailSenderDto) {
    return this.mailSenderService.update(+id, updateMailSenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailSenderService.remove(+id);
  }
}
