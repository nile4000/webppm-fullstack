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
import { Router, ActivatedRoute } from '@angular/router';

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

  // Initialize Testproject Data
  initialData = [
    {
      name: 'ABCD',
      type: undefined,
      data: [
        {
          name: 'Initialisierung',
          start: Date.UTC(2021, 12, 1),
          end: Date.UTC(2021, 12, 16),
          y: 1,
          completed: 4.2,
        },
        {
          name: 'Meilenstein 1',
          start: Date.UTC(2021, 12, 21),
          y: 1,
          milestone: true,
        },
        {
          name: 'Konzept',
          start: Date.UTC(2021, 12, 27),
          end: Date.UTC(2022, 1, 19),
          y: 1,
          completed: 1,
        },
        {
          name: 'Meilenstein 2',
          start: Date.UTC(2022, 1, 25),
          y: 1,
          milestone: true,
        },
        {
          name: 'Realisierung',
          start: Date.UTC(2022, 1, 31),
          end: Date.UTC(2022, 3, 31),
          y: 1,
          completed: 0.89,
        },
        {
          name: 'Meilenstein 3',
          start: Date.UTC(2022, 4, 7),
          y: 1,
          milestone: true,
        },
        {
          name: 'Abschluss',
          start: Date.UTC(2022, 4, 13),
          end: Date.UTC(2022, 4, 20),
          y: 1,
          completed: 0,
        },
      ],
    },
    {
      name: 'Web-Projekt',
      type: undefined,
      data: [
        {
          name: 'Initialisierung',
          start: Date.UTC(2022, 1, 1),
          end: Date.UTC(2022, 2, 15),
          y: 0,
          completed: 1,
        },
        {
          name: 'Meilenstein 1',
          start: Date.UTC(2022, 2, 17),
          y: 0,
          milestone: true,
        },
        {
          name: 'Konzept',
          start: Date.UTC(2022, 2, 19),
          end: Date.UTC(2022, 4, 30),
          y: 0,
          completed: 1.1,
        },
        {
          name: 'Meilenstein 2',
          start: Date.UTC(2022, 5, 2),
          y: 0,
          milestone: true,
        },
        {
          name: 'Realisierung',
          start: Date.UTC(2022, 5, 4),
          end: Date.UTC(2022, 5, 31),
          y: 0,
          completed: 0.69,
        },
        {
          name: 'Meilenstein 3',
          start: Date.UTC(2022, 6, 4),
          y: 0,
          milestone: true,
        },
        {
          name: 'Abschluss',
          start: Date.UTC(2022, 6, 6),
          end: Date.UTC(2022, 6, 15),
          y: 0,
          completed: 0,
        },
      ],
    },
  ];

  initialDataOptions: Highcharts.Options = {
    series: this.initialData,
    yAxis: {
      type: 'category',
      max: 1,
      grid: {
        columns: [
          {
            title: {
              text: 'Projekt',
            },
            categories: this.map(this.initialData, s => {
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
