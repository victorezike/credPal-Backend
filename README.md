# 🛍️ Product Management API

A simple RESTful API built with **Node.js**, **Express**, **MongoDB**, and **TypeScript** to manage products in a store.

## 🚀 Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update product details
- Delete a product

## 🧱 Product Model

The product model is defined as:

```ts
interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
}
