import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @ViewChild('imageTag', { static: true }) imageTag: ElementRef;
  @Input() src: string;
  @Input() alt: string;
  skeleton = true;

  onLoad() {
    this.skeleton = false;
  }

  constructor() {}
}
