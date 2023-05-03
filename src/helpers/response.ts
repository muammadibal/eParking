import { Response } from "express";

const ResponseFormatter = (
  statusCode: number,
  data: any = null,
  message: string = ""
) => {
  return {
    statusCode,
    message,
    data
  };
};

export default ResponseFormatter;
