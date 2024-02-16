export type Product = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export type ProductsState = {
  products: Product[]
  total: number
  skip: number
  limit: number
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILED'
  error: string | null
}
