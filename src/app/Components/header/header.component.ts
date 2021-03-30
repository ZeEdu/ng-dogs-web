import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public UserContext: UserContextService) {}
}
