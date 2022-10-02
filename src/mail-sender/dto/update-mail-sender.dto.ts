import { PartialType } from '@nestjs/mapped-types';
import { CreateMailSenderDto } from './create-mail-sender.dto';

export class UpdateMailSenderDto extends PartialType(CreateMailSenderDto) {}
