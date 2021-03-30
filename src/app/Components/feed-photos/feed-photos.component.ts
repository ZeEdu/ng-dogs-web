import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPhoto } from 'src/app/Interfaces/get-photo';

@Component({
  selector: 'app-feed-photos',
  templateUrl: './feed-photos.component.html',
  styleUrls: ['./feed-photos.component.css'],
})
export class FeedPhotosComponent {
  @Input() photos: GetPhoto[];

  constructor() {}
}
