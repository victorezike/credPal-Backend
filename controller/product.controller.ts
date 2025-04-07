import { Request, Response } from "express";
import {
  createProduct,
  retrieveProduct,
  retrieveProductById,
  updateProduct,
  deleteProduct,
} from "../service/product.service";

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productBody = req.body;
    const product = await createProduct(productBody);
    res.status(201).json({
      success: true,
      data: product,
      message: "Product created successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const retrieveProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await retrieveProduct();
    res.json({
      success: true,
      data: products,
      message: "Products retrieved successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const retrieveProductByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await retrieveProductById(productId);
    res.json({
      success: true,
      data: product,
      message: "Product retrieved successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const productBody = req.body;
    const product = await updateProduct(productId, productBody);
    res.json({
      success: true,
      data: product,
      message: "Product updated successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await deleteProduct(productId);
    res.json({
      success: true,
      data: product,
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
