import { UserService } from "app/services/userService";
import { successResponse } from "app/utils/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";

const userService = new UserService();

export const signUp = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.signIn();
  return successResponse(response);
};

export const signIn = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.signIn();
  return successResponse(response);
};

export const verify = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.verify();
  return successResponse(response);
};

export const profile = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.profile();
  return successResponse(response);
};

export const cart = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.cart();
  return successResponse(response);
};

export const payment = async (event: APIGatewayProxyEventV2) => {
  const response = await userService.payment();
  return successResponse(response);
};
