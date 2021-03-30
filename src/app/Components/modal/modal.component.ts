import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, skip, take } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modal: Observable<GetPhoto>;
  modalState: Observable<boolean>;

  constructor(public modalService: ModalService) {}

  handleClick(event: MouseEvent) {
    const { currentTarget, target } = event;

    if (target === currentTarget) {
      this.modalService.setModalState = false;
    }
  }

  ngOnInit(): void {
    this.modalState = this.modalService.getModalState;
    this.modal = this.modalService.getModalData;
  }
}
