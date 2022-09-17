import Draggable from 'highcharts/modules/draggable-points';
import { LocalProjectService } from './../../../pages/project/service/localProject.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';
import HC_gantt from 'highcharts/modules/gantt';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChartService } from './service/chart.service';
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
  isHidden: boolean = true;
  selectedPhase: any = {};

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
    public chartsService: ChartService
  ) {}

  ngOnInit() {
    this.selectedPhase = null;

    Highcharts.setOptions({
      plotOptions: {
        series: {
          point: {
            events: {
              click: this.openPhase,
            },
          },
        },
      },
    });
    this.chartGantt = this.service.getProjects().pipe(
      map(project => this.generateHighChart(project)),
      // Starting Chart with Testdata
      startWith(this.initialData)
    );
  }

  editBtn;
  deleteBtn;

  openPhase(e: Highcharts.PointClickEventObject) {
    this.isHidden = !this.isHidden;
    this.editBtn = document.querySelector('#btnEditSelected') as HTMLButtonElement;
    this.editBtn.hidden = !this.isHidden;
    this.deleteBtn = document.querySelector('#btnDeleteSelected') as HTMLButtonElement;
    this.deleteBtn.hidden = !this.isHidden;
    this.selectedPhase = e.point;
  }

  editPhase() {
    this.chartsService.editPhase(this.selectedPhase);
  }

  deletePhase() {
    this.chartsService.deletePhase(this.selectedPhase);
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
