import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../utils';
import * as productService from './products.service';

// export const getProducts = catchAsync(async (res: Response) => {
//   // const result = await productService.getProducts();
//   res.status(400);
// });

export const getProducts = catchAsync(async (_req: Request, res: Response) => {
  const product = await productService.getProducts();
  res.json(product);
});

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});
