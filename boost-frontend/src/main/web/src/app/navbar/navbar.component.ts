import {Component, OnInit} from '@angular/core';
import MenuLink from './menulink';
import {AuthenticationService} from '../login/authenticationservice';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menu: MenuLink[];
  public externalLink: MenuLink[];
  public currentMenu: MenuLink;
  public toggleNavbarClass = false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.createMenu();
    this.createExternalLink();
    this.setupRoute();
  }

  private createMenu() {
    this.menu = [
      {role: ['ANONYMOUS', 'USER', 'ADMIN'], route: '/', label: 'Home'},
      {role: ['ADMIN', 'USER','ANONYMOUS'], route: '/books', label: 'Books'}
    ];
  }

  private setupRoute() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.menu.forEach(menu => menu.selected = false);
        const url = e.url;
        if (url === null || url.length === 0 || url === '/') {
          this.currentMenu = {role: ['ANONYMOUS', 'USER', 'ADMIN'], route: '/', label: 'Home'};
          this.currentMenu.selected = true;
        } else {
          const currentMenuList = this.menu.filter(r => r.route === url);
          if (currentMenuList && currentMenuList.length > 0) {
            this.currentMenu = currentMenuList[0];
            this.currentMenu.selected = true;
          } else {
            this.currentMenu = null;
          }
        }

      }
    });
  }


  click(item: MenuLink) {
    this.menu.forEach(x => x.selected = false);
    this.currentMenu = item;
  }

  toggleNavbar() {
    this.toggleNavbarClass = !this.toggleNavbarClass;
  }

  toggleNavbarShow() {
    if (this.toggleNavbarClass) {
      return 'collapse navbar-collapse show ';
    }
    return 'collapse navbar-collapse';
  }

  hasRole(expected) {
    return this.authenticationService.hasRole(expected);
  }

  private createExternalLink() {
    this.externalLink = [
     // {role: ['ADMIN'], route: '/proxy/aggregator/management', label: 'Management'},
      //{role: ['ADMIN'], route: '/proxy/metrics/aggregator', label: 'Metrics'},
      //{role: ['ADMIN'], route: '/proxy/robot/', label: 'Robot'}
    ];
  }
}
