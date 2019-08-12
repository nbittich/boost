export default class MenuLink {
  route?: string;
  role?: Array<string>;
  label: string;
  active?: string = 'active';
  public selected?: boolean = false;
}
