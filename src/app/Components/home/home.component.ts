import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
}
