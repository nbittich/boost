import {Auditable} from "../common/auditable";

export class Book extends Auditable{
  public id:number;
  public title:string;
  public description:string;
  public totalDuration:string;
}
