export class UserService {
  constructor() {}

  async signIn() {
    return { data: "signIn" };
  }

  async signUp() {
    return { data: "signUp" };
  }

  async verify() {
    return { data: "verify" };
  }

  async profile() {
    return { data: "profile" };
  }

  async payment() {
    return { data: "payment" };
  }

  async cart() {
    return { data: "cart" };
  }
}
