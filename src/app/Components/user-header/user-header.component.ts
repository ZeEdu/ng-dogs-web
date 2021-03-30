import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  currentSegment: string;
  title: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(() => {
      const segment: UrlSegment[] = this.activatedRoute.snapshot.firstChild.url;
      if (segment === undefined) this.title = 'Minha Conta';
      else if (segment.length > 0 && segment[0].path === 'post')
        this.title = 'Poste sua Foto';
      else if (segment.length > 0 && segment[0].path === 'stats')
        this.title = 'Estatísticas';
      else this.title = 'Minha Conta';
    });
  }
}
