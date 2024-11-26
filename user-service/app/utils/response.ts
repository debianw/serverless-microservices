export const response = (
  statusCode: number,
  message: string,
  data?: unknown
) => {
  if (data) {
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message,
        data,
      }),
    };
  } else {
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message,
      }),
    };
  }
};

export const successResponse = (data: unknown) => {
  return response(200, "success", data);
};

export const errorResponse = (code: number = 500, error: unknown) => {
  return response(code, "ops, failure");
};
