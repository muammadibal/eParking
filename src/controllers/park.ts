import { Request, Response, NextFunction } from "express";

const detailPark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const allParks = async (req: Request, res: Response, next: NextFunction) => {};

const createPark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const updatePark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const deletePark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export { detailPark, allParks, createPark, updatePark, deletePark };
