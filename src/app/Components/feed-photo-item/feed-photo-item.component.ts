import { Component, Input, OnInit } from '@angular/core';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-feed-photo-item',
  templateUrl: './feed-photo-item.component.html',
  styleUrls: ['./feed-photo-item.component.css'],
})
export class FeedPhotoItemComponent {
  @Input() photo: GetPhoto;

  handleClick() {
    this.modal.setModalData = this.photo;
    this.modal.setModalState = true;
  }

  constructor(private modal: ModalService) {}
}
