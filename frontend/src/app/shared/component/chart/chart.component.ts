import {
  ProjectDto,
  ProjectService,
} from './../../../pages/project/service/project.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';
import Draggable from 'highcharts/modules/draggable-points';
import HC_gantt from 'highcharts/modules/gantt';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChartService } from './service/chart.service';
import { Router } from '@angular/router';
import chartData from './data';

HC_gantt(Highcharts);
Accessibility(Highcharts);
Draggable(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartGantt: Observable<Highcharts.Options>;
  Highcharts: typeof Highcharts = Highcharts;
  map = Highcharts.map;

  editButton = document?.getElementById('btnEditSelected') as HTMLInputElement;

  initialDataOptions: Highcharts.Options = {
    series: chartData,
    yAxis: {
      type: 'category',
      max: 1,
      grid: {
        columns: [
          {
            title: {
              text: 'Projekt',
            },
            categories: this.map(chartData, s => {
              return s.name;
            }),
          },
        ],
      },
    },
  };

  constructor(
    private service: ProjectService,
    public chartsService: ChartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.chartGantt = this.service.getProjects().pipe(
      map(project => this.generateHighChart(project)),

      // Starting Chart with Testdata
      startWith(this.initialDataOptions)
    );
  }

  editPhase() {
    this.router.navigate(['/edit-phase']);
  }

  generateHighChart(project: ProjectDto[]): Highcharts.Options {
    return {
      series: project,
      yAxis: {
        type: 'category',
        grid: {
          columns: [
            {
              title: {
                text: 'Projekt',
              },
              categories: this.map(project, s => {
                return s.name;
              }),
            },
          ],
        },
      },
    };
  }
}
