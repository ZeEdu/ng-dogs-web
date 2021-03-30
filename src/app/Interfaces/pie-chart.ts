import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

export interface PieChart {
  Options: ChartOptions;
  Labels: Label[];
  Data: SingleDataSet;
  Type: ChartType;
  Legend: boolean;
  Plugins: [];
}
