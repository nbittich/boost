import {Component, OnInit} from '@angular/core';
import MenuLink from './menulink';
import {AuthenticationService} from '../login/authenticationservice';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {faFileAudio, faHome, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

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
  faHome=faHome;
  faFileAudio=faFileAudio;
  faVolumeUp=faVolumeUp;

  private createMenu() {
    this.menu = [
      {role: ['ANONYMOUS', 'USER', 'ADMIN'], route: '/', label: 'Home', selected: false, icon:this.faHome},
      {role: ['ADMIN', 'USER', 'ANONYMOUS'], route: '/books', label: 'Discover', selected: false,icon:faVolumeUp}
    ];
  }

  private setupRoute() {
    let defaultMenu = {role: ['ANONYMOUS', 'USER', 'ADMIN'], route: '/', label: 'Home', selected: true, icon:this.faHome};
    this.router.events.subscribe(e => {
      this.currentMenu = defaultMenu;
      if (e instanceof NavigationEnd) {
        this.menu.forEach(menu => menu.selected = false);
        let url = e.url;
        const currentMenuList = this.menu.filter(r => r.route === url);
        if (currentMenuList && currentMenuList.length > 0) {
          let m = currentMenuList[0];
          m.selected = true;
          this.currentMenu = m;
        }
      }
    });
  }

  click(item: MenuLink) {
    this.menu.forEach(x => x.selected = false);
    this.currentMenu = item;
    this.currentMenu.selected = true
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
