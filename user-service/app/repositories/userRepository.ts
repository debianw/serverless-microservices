import {injectable} from "tsyringe";

@injectable()
export class UserRepository {
  constructor() {}

  async createUser() {
    console.log('create user in db')
  }
}
