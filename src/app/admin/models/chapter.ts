export interface IChapter{
  name: string,
  type: string,
  route: string,
  html_content: string,
  scheme:{
    header: [],
    top: [],
    middle: [],
    bottom: [],
    footer: []
  }
}
