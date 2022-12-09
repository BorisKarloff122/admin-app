import {IUser} from "../admin/models/user";
import {mocks} from "./mocks";
import {environment} from "../../environments/environment";

const env = environment
export const checkUser = (userInfo: IUser, selectedUser: IUser): boolean =>{
  return userInfo.userName === selectedUser.userName && userInfo.password === selectedUser.password;
}

export const dataSetter = (data:any[], tableName: string): void => {
  let data_str: string = JSON.stringify(data);
  sessionStorage.setItem(tableName, data_str);
}

export const dataSetterSingleEntity = (data: any, tableName: string, id:number): void => {
  let entityArrayString: string | null = sessionStorage.getItem(tableName);
  let searchedEntityIndex!: number;
  let arr: any[] = entityArrayString !== null ? JSON.parse(entityArrayString) : [];

  if(!entityArrayString){
    dataSetter(arr, tableName);
    return
  }

  searchedEntityIndex = arr.findIndex((entry: any)=> entry.id === id);

  if(!searchedEntityIndex){
    arr.push(data);
    dataSetter(arr, tableName);
  }

  arr[searchedEntityIndex] = data;
  dataSetter(arr, tableName);
}

export const dataGetter = (tableName: string): any[] => {
  let data: string | null = sessionStorage.getItem(tableName);
  return data !== null ? JSON.parse(data) : [];
}

export const dataGetterSingleEntity = (tableName: string, entityId: number) => {
  let data: string | null = sessionStorage.getItem(tableName);
  if(data !== null){
    return JSON.parse(data).filter((entry: any) => entry.id = entityId);
  }
  return null
}

export const fillSessionStorage = (): void =>{
  if(env.useMocks){
    sessionStorage.clear();
    mocks.forEach((i: any,index: number) =>{
      let entityTable = i[0].table;
      dataSetter(i, entityTable);
    })

    console.log('Session Storage filled');
    return
  }

  console.log('Session storage is not required');
}

export const mockLoginFlag = (): boolean => {
  let loginFlag: string | null = sessionStorage.getItem('canLoadAdmin');
  return loginFlag !== null;
}
