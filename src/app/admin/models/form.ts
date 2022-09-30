import {IFormField} from "./formField";

export interface IForm{
  fields: IFormField[],
  title: string,
  modalBtnText: string,
  isModal: boolean,
  subTitle?: string
}
