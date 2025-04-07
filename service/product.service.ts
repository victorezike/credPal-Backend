import productModel, { IProduct } from "../model/product.model";

export const createProduct = async (productObj: IProduct): Promise<IProduct> => {
  try {
    const newProduct = await productModel.create(productObj);
    return newProduct;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const retrieveProduct = async (): Promise<IProduct[]> => {
  try {
    const products = await productModel.find({});
    return products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const retrieveProductById = async (id: string): Promise<IProduct> => {
  try {
    const product = await productModel.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (
  id: string,
  productObj: Partial<IProduct>
): Promise<IProduct> => {
  try {
    const product = await productModel.findByIdAndUpdate(
      id,
      { $set: productObj },
      { new: true }
    );
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id: string): Promise<IProduct> => {
  try {
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
