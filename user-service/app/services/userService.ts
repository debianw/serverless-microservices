import { SignupDto } from "app/dtos/signup.dto";
import { UserRepository } from "../repositories/userRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserService {
  constructor(@inject("UserRepository") private userRepo: UserRepository) {}

  async signIn() {
    return { data: "signIn" };
  }

  async signUp(dto: SignupDto) {
    await this.userRepo.createUser(dto);
    return { data: "signUp" };
  }

  async verify() {
    return { data: "verify" };
  }

  async getProfile() {
    return { data: "get profile" };
  }

  async createProfile() {
    return { data: "create profile" };
  }

  async payment() {
    return { data: "payment" };
  }

  async cart() {
    return { data: "cart" };
  }
}
