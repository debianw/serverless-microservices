import { container } from 'tsyringe'
import { UserService } from "app/services/userService";
import { successResponse } from "app/utils/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import {UserRepository} from "../repositories/userRepository";

container.register("UserService", { useClass: UserService });
container.register("UserRepository", { useClass: UserRepository });

const userService = container.resolve(UserService);

export const signUp = middy(async (event: APIGatewayProxyEventV2) => {
  const response = await userService.signUp();
  return successResponse(response);
}).use(jsonBodyParser());

export const signIn = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.signIn();
  return successResponse(response);
};

export const verify = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.verify();
  return successResponse(response);
};

export const profile = async (event: APIGatewayProxyEventV2) => {
  const method = event.requestContext.http.method

  if (method === "POST") {
    const response = await userService.createProfile();
    return successResponse(response);
  }

  if (method === "GET") {
    const response = await userService.getProfile();
    return successResponse(response);
  }
};

export const cart = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.cart();
  return successResponse(response);
};

export const payment = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.payment();
  return successResponse(response);
};
