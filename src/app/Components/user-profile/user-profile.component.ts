import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { ModalService } from 'src/app/Services/modal.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userId: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id.toString();
    });
  }
}
