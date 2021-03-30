import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import {
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  SingleDataSet,
} from 'ng2-charts';
import { Observable } from 'rxjs';
import { BarChart } from 'src/app/Interfaces/bar-chart';
import { GetUserStats } from 'src/app/Interfaces/get-user-stats';
import { PieChart } from 'src/app/Interfaces/pie-chart';

@Component({
  selector: 'app-user-stats-graphs',
  templateUrl: './user-stats-graphs.component.html',
  styleUrls: ['./user-stats-graphs.component.css'],
})
export class UserStatsGraphsComponent implements OnInit {
  @Input() userStats: Observable<GetUserStats[]>;
  totalAcessos: number;

  public pieChart: PieChart;
  public barChart: BarChart;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.userStats.subscribe((data) => {
      this.pieChart = {
        Data: data.map(({ acessos }) => Number(acessos)),
        Labels: data.map(({ title }) => title),
        Legend: true,
        Options: {
          responsive: true,
        },
        Plugins: [],
        Type: 'pie',
      };

      this.barChart = {
        data: [
          {
            data: data.map(({ acessos }) => Number(acessos)),
            label: 'Acessos',
          },
        ],
        labels: data.map(({ title }) => title),
        legend: false,
        options: {
          responsive: true,
        },
        plugins: [],
        type: 'bar',
      };

      this.totalAcessos = data
        .map(({ acessos }) => Number(acessos))
        .reduce((a, b) => a + b);
    });
  }
}
