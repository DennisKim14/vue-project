export class Board {
  _id: string | undefined = '';
  title: string | undefined = '';
  contents: string | undefined = '';

  constructor(
    _id?: string,
    title?: string,
    contents?: string,
  ) {
    this._id = _id;
    this.title = title;
    this.contents = contents;
  }

}
