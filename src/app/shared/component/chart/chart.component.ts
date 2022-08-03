import { LocalProjectService } from './../../../pages/project/service/localProject.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';
import Draggable from 'highcharts/modules/draggable-points';
import HC_gantt from 'highcharts/modules/gantt';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChartService } from './service/chart.service';
import { Router } from '@angular/router';
import chartData from '../../data/data';
import { ProjectDto } from '../../model/Project';

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

  initialData: Highcharts.Options = {
    chart: {
      events: {
        load: function () {
          this.series[0].setData(chartData);
        },
      },
    },

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
    private service: LocalProjectService,
    public chartsService: ChartService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(chartData);
    this.chartGantt = this.service.getProjects().pipe(
      map(project => this.generateHighChart(project)),
      // Starting Chart with Testdata
      startWith(this.initialData)
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
