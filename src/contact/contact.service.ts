import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {
  }

  async findAll(): Promise<ContactEntity[]> {
    return await this.contactRepository.find();
  }

  async findOne(id: number): Promise<ContactEntity> {
    return await this.contactRepository.findOne({ id });
  }

  async create(contact: ContactEntity): Promise<ContactEntity> {
    return await this.contactRepository.create(contact);
  }

  async update(contact: ContactEntity): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
