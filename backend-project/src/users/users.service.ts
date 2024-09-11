import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Person 1', 'Person 2', 'Person 3'];

  findAll(): string[] {
    return this.users;
  }
}
