import './user'
import { axiosInstance } from './utils/axios-instance'
import { createAddComment, createGetComments } from 'shared/comments'

createAddComment(axiosInstance)
createGetComments(axiosInstance)
