import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findAll() {
    const user = await this.userRepo.find({
      relations: ['collaborator'],
    });

    return user.map((user) => {
      delete user.password;
      return user;
    });
  }

  async findOneOrFail(id: string) {
    try {
      const user = await this.userRepo.findOneOrFail(id);

      console.log(user);

      return user;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findLogin(login: string) {
    try {
      return await this.userRepo.findOne({
        where: { login },
        relations: ['collaborator'],
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findUserCollaborator(id: string) {
    try {
      console.log('oi');

      const a = await this.userRepo.findOneOrFail(id, {
        relations: ['collaborator'],
      });

      return a;
    } catch (e) {}
  }

  async create(data: User) {
    return await this.userRepo.save(this.userRepo.create(data));
  }

  async update(id: string, data: User) {
    const user = await this.findOneOrFail(id);

    this.userRepo.merge(user, data);
    return await this.userRepo.save(user);
  }

  async deleteById(id: string) {
    await this.userRepo.delete(id);
  }
}
