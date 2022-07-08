import { Injectable } from '@angular/core';
import { Options } from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  private chartDefault: Options = {
    credits: {
      enabled: false,
    },
    title: {
      text: 'Übersicht',
      align: 'left',
    },
    tooltip: {
      enabled: true,
    },
    plotOptions: {
      series: {
        animation: false,
        dragDrop: {
          draggableX: true,
          draggableY: true,
          dragMinY: 0,
          dragMaxY: 2,
        },
        dataLabels: {
          enabled: true,
          style: {
            cursor: 'default',
            pointerEvents: 'auto',
          },
        },
        allowPointSelect: true,
        cursor: 'pointer',
      },
    },
  };
}
