import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  public defaultChartOptions: Options = {
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
    lang: {
      decimalPoint: ',',
      thousandsSep: '.',
      loading: 'Daten werden geladen...',
      months: [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ],
      weekdays: [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez',
      ],
      rangeSelectorFrom: 'Von',
      rangeSelectorTo: 'Bis',
      rangeSelectorZoom: 'Zeitraum',
      downloadJPEG: 'Download als JPEG-Bild',
      downloadPDF: 'Download als PDF-Dokument',
      resetZoom: 'Zoom zurücksetzen',
      resetZoomTitle: 'Zoom zurücksetzen',
      viewFullscreen: 'Vollbild anzeigen',
      printChart: 'Drucken',
    },
  };

  constructor() {
    Highcharts.setOptions(this.defaultChartOptions);
  }

  editPhase(phase: any) {
    console.log(phase);
  }

  deletePhase(phase: any) {
    console.log(phase);
  }
}
