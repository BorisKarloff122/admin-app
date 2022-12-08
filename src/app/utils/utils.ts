import {IUser} from "../admin/models/user";

export const checkUser = (userInfo: IUser, selectedUser: IUser): boolean =>{
  return userInfo.userName === selectedUser.userName && userInfo.password === selectedUser.password;
}
