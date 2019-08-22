export default class MenuLink {
  route?: string;
  icon?: any;
  role?: Array<string>;
  label: string;
  active?: string = 'active';
  public selected?: boolean = false;
}
