import {Auditable} from "../common/auditable";
import {Star} from "../stars/star";

export class Book extends Auditable{
  public id:number;
  public stars:Array<Star>;
  public title:string;
  public lang:string;
  public username:string;
  public published: boolean;
  public author:string;
  public description:string;
  public totalDuration:number;
  public cover:any;
}
export class BookDto {
  public id:number;
  public title:string;
  public author:string;
  public username:string;
  public description:string;
  public published: boolean;
  public totalDuration:number;
  public lang:string;
  public category:string;
  public cover:any;
  public fileName:string;
  public contentType: string;
}
