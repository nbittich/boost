import {Auditable} from "../common/auditable";

export class Book extends Auditable{
  public id:number;
  public title:string;
  public author:string;
  public description:string;
  public totalDuration:number;
  public cover:any;
}
export class BookDto {
  public id:number;
  public title:string;
  public author:string;
  public description:string;
  public totalDuration:number;
  public category:string;
  public cover:any;
  public fileName:string;
  public contentType: string;
}
