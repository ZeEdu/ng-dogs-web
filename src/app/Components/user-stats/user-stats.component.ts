import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetUserStats } from 'src/app/Interfaces/get-user-stats';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css'],
})
export class UserStatsComponent implements OnInit {
  userStats: Observable<GetUserStats[]>;
  constructor(private apiHandle: ApiHandlerService) {}

  ngOnInit(): void {
    this.userStats = this.apiHandle
      .request('GET', '/api/stats')
      .pipe(map((x) => x as GetUserStats[]));
  }
}
