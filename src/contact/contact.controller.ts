import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactEntity } from './contact.entity';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactsService: ContactService){}

  @Get()
  index(): Promise<ContactEntity[]> {
    return this.contactsService.findAll();
  }

  @Post()
  async create(@Body() contactData: ContactEntity): Promise<any> {
    return this.contactsService.create(contactData);
  }

  @Get(':id')
  async fetch(@Param('id') id): Promise<any> {
    return this.contactsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ContactEntity): Promise<any> {
    data.id = Number(id);
    console.log('Update #' + data.id)
    return this.contactsService.update(data);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.contactsService.delete(id);
  }
}
