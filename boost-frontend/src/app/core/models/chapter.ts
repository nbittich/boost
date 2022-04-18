import { Auditable } from "./auditable";
import { Book } from "./book";
import { Upload } from "./upload";

export interface ChapterEntity extends Auditable {
   id?: number;
   version?: number;
   description?: string;
   title?:string;
   timeDuration?:number; // probably in millis
   order?:number; // chapter logical order
   upload: Upload;
}

export interface ChapterDto {
   id?:number;
   bookId?:number;
   title?: string;
   order?:number;
   description?: string;
   file?: string;
   fileName?: string;
   contentType?: string;
}


export class ChapterHistory extends Auditable{
   id?:number;
   bookId?:number;
   book?: Book;
   chapterId?:number;
   chapter?:ChapterEntity;
   currentTime?:number;
}
