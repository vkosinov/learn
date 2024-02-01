import './login'
import './logout'

import { axiosInstance } from '../utils/axios-instance'

import {
  createGetUser,
  createGetUsers,
  createRecoveryPassword,
  createRegistration,
  createResetPassword,
} from 'shared/user'

createGetUser(axiosInstance)
createRecoveryPassword(axiosInstance)
createRegistration(axiosInstance)
createResetPassword(axiosInstance)
createGetUsers(axiosInstance)
