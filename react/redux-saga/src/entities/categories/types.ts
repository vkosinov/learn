import { FetchStatus } from '../../shared/types'

export type CategoriesState = {
  data: string[] | null
  status: FetchStatus
  error: string | null
}
