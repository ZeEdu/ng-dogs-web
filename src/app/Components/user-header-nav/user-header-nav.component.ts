import { Component, HostListener, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-user-header-nav',
  templateUrl: './user-header-nav.component.html',
  styleUrls: ['./user-header-nav.component.css'],
})
export class UserHeaderNavComponent implements OnInit {
  mobile = false;
  mobileMenu = false;

  setMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  @HostListener('window:resize')
  onResize() {
    this.setMobile();
  }

  setMobile() {
    this.mobile = window.matchMedia('(max-width: 40rem)').matches;
  }

  constructor(private userContext: UserContextService) {}

  logout() {
    this.userContext.logout();
  }

  ngOnInit(): void {
    this.setMobile();
  }
}
