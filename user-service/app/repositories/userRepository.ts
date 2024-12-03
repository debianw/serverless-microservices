import { SignupDto } from "app/dtos/signup.dto";
import { IUser } from "app/models/user";
import { DBClient } from "app/utils/db";
import { injectable } from "tsyringe";
import { v4 as uuid } from "uuid";

@injectable()
export class UserRepository {
  constructor() {}

  getId(id?: string) {
    return id || uuid();
  }

  async createUser(dto: SignupDto): Promise<IUser> {
    const dbClient = DBClient();
    await dbClient.connect();

    const sqlInsert = `INSERT INTO users(id, first_name, last_name, email, type, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [
      this.getId(),
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.type,
      new Date().toISOString(),
    ];
    const result = await dbClient.query(sqlInsert, values);

    await dbClient.end();

    if (!result.rowCount) {
      throw new Error(`Error trying to insert a user`);
    }

    const [data] = result.rows;
    const user: IUser = {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      type: data.type,
      createdAt: data.created_at,
    };

    return user;
  }
}
