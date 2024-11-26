import {UserRepository} from "../repositories/userRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class UserService {
  constructor(@inject('UserRepository') private userRepo: UserRepository) {
  }

  async signIn() {
    return { data: "signIn" };
  }

  async signUp() {
    await this.userRepo.createUser()
    return { data: "signUp" };
  }

  async verify() {
    return { data: "verify" };
  }

  async getProfile() {
    return { data: "get profile" };
  }

  async createProfile() {
    return { data: "create profile"}
  }

  async payment() {
    return { data: "payment" };
  }

  async cart() {
    return { data: "cart" };
  }
}
