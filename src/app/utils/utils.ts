import {IUser, UserLogin} from "../shared/models/user";
import {mocks} from "./mocks";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {IHttpResponse} from "../shared/models/httpResponse.model";

const env = environment

export class HttpResponseObj implements IHttpResponse {
  constructor(statusCode: number, error: string, errorMessage: string, data?: any){
    this.status = statusCode;
    this.error = error;
    this.errorMessage = errorMessage
    this.data = data ? data : '';
  }

  data: any;
  error: string;
  errorMessage: string;
  status: number;
}

export const checkUser = (userInfo: UserLogin, selectedUser: IUser): boolean =>{
  if(userInfo.login === selectedUser.login) {
    return userInfo.password === selectedUser.password;
  }
  return false;
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

export const checkCreds = (creds: UserLogin): Observable<IHttpResponse> =>{
  let usersList: IUser[] = dataGetter('users');
  let searchedUser: IUser | undefined = usersList.find((entry) => entry.login === creds.login);
  if(!searchedUser || !checkUser(creds, searchedUser)){

    return of(
      new HttpResponseObj(400, 'No user found', 'Wrong login or password! Check if everything is right and try again')
    )
  }

  sessionStorage.setItem('canLoadAdmin', JSON.stringify(true));
  sessionStorage.setItem('activeUser', JSON.stringify(searchedUser));
  return of(
    new HttpResponseObj(200, '', '')
  )
}

export const logOut = ()=>{
  sessionStorage.removeItem('canLoadAdmin');
  sessionStorage.removeItem('activeUser');

}
