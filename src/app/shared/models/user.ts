export interface IUser{
  id: number,
  userName: string,
  login: string,
  password: string,
  roles: number[]
  rememberMe: boolean
}

export type UserLogin = Omit <IUser, "roles" | "rememberMe">
