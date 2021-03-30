import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { GetPhotoContent } from 'src/app/Interfaces/get-photo-content';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photo: Observable<GetPhoto>;
  // photoContent:

  constructor(
    private activatedRouter: ActivatedRoute,
    private apiHandler: ApiHandlerService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id = params['id'];
      const route = `/api/photo/${id}`;

      this.photo = this.apiHandler.request('GET', route).pipe(
        retry(2),
        map((x) => (x as GetPhotoContent).photo as GetPhoto)
      );
    });
  }
}
