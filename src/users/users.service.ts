import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entites/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findUsers(name?: string): Promise<User[]> {
    if (name) {
      return this.usersRepository.find({ where: { name } });
    }
    return this.usersRepository.find();
  }

  async findUserById(userId: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findUserByUsername(username: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(username);
      return user;
    } catch (error) {
      throw error;
    }
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(createdUser);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // find the user to update
    const user = await this.findUserById(id);

    const updatedUser = {
      ...user,
      ...updateUserDto,
    };

    return this.usersRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findUserById(id);

    return this.usersRepository.remove(user);
  }
}
