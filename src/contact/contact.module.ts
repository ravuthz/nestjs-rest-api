import { Module } from '@nestjs/common';
import { ContactEntity } from './contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactEntity]),
  ],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {
}
