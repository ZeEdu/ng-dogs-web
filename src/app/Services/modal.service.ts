import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetPhoto } from '../Interfaces/get-photo';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOn = new BehaviorSubject<boolean>(false);
  private modalData = new BehaviorSubject<GetPhoto>(null);

  get getModalState(): Observable<boolean> {
    return this.modalOn.asObservable();
  }
  set setModalState(state: boolean) {
    this.modalOn.next(state);
  }

  set setModalData(photo: GetPhoto) {
    this.getModalData.pipe(take(1)).subscribe((currentPhoto) => {
      if (currentPhoto !== photo) {
        this.modalData.next(photo);
      }
    });
  }

  get getModalData(): Observable<GetPhoto> {
    return this.modalData.asObservable();
  }

  constructor() {}
}
