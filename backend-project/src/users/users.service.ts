import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Person 1', 'Person 2', 'Person 3'];

  findAll(): any {
    return process.env.ENV_VAR ? process.env.ENV_VAR : this.users;
  }
}
