import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './branch.entity';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private readonly profileRepository: Repository<Branch>,
  ) {}

  async findAll() {
    return await this.profileRepository.find();
  }

  async findOneOrFail(id: string) {
    try {
      return await this.profileRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: Branch) {
    return await this.profileRepository.save(
      this.profileRepository.create(data),
    );
  }

  async update(id: string, data: Branch) {
    const profile = await this.findOneOrFail(id);

    this.profileRepository.merge(profile, data);
    return await this.profileRepository.save(profile);
  }

  async deleteById(id: string) {
    await this.profileRepository.softDelete(id);
  }
}
