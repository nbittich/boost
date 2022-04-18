import { Auditable } from "./auditable";
import { Book } from "./book";
import { ChapterEntity } from "./chapter";

export interface Upload extends Auditable{
    id?: number;
    version?: number;
    pathLocation?: string;
    contentType?: string;
    fileName?: string;
    file?:string;
    chapter?:ChapterEntity; // probably in millis
    book?:Book; // probably in millis
    order?:number; // chapter logical order
}