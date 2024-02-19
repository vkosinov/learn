import { axiosInstance } from './axios-instance'
import { PRODUCTS_SELECT } from './constants'

type GetProductsArg = { limit: number; skip: number; category: string | null }

export const api = {
  getCategories: axiosInstance.get(`/products/categories`),
  getProduct: (id: string) => axiosInstance.get(`/products/${id}`),
  getProducts: ({ limit, skip, category }: GetProductsArg) => {
    const path = category ? `/products/category/${category}` : '/products'

    return axiosInstance.get(path, {
      params: {
        select: PRODUCTS_SELECT,
        limit,
        skip,
      },
    })
  },
}
