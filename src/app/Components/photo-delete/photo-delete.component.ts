import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry, take } from 'rxjs/operators';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';

@Component({
  selector: 'app-photo-delete',
  templateUrl: './photo-delete.component.html',
  styleUrls: ['./photo-delete.component.css'],
})
export class PhotoDeleteComponent {
  @Input() photoId: number;

  handleClick() {
    const confirm = window.confirm(
      'Are you sure you want to delete this photo?'
    );

    if (confirm) {
      this.apiHandler
        .request('DELETE', '/api/photo/' + this.photoId)
        .pipe(retry(2), take(1))
        .subscribe(() => window.location.reload());
    }
  }
  constructor(private apiHandler: ApiHandlerService, private router: Router) {}
}
