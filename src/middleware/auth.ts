
import { Middleware } from '@nuxt/types'

const login = '/sign-in'
const routes = [login, '/sign-up']

const authMiddleware: Middleware = ({ store, redirect, route }) : void => {
  if (!routes.some(path => path === route.path)) {
    if (!store.state.authenticated) {
      redirect(login)
    }
  }
}

export default authMiddleware
