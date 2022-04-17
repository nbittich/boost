export class ChapterEntity {
  public id;
  public version;
  public description;
  public title;
  public timeDuration; // probably in millis
  public order; // chapter logical order
  public upload;
}

export class ChapterDto {
  public id;
  public bookId;
  public title;
  public order;
  public description;
  public file;
  public fileName;
  public contentType;
}
