import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {
    Highcharts.setOptions({
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
        downloadPNG: 'Download als PNG-Bild',
        downloadJPEG: 'Download als JPEG-Bild',
        downloadPDF: 'Download als PDF-Dokument',
        downloadSVG: 'Download als SVG-Bild',
        resetZoom: 'Zoom zurücksetzen',
        resetZoomTitle: 'Zoom zurücksetzen',
        viewFullscreen: 'Vollbild anzeigen',
        printChart: 'Drucken',
      },
    });
  }
}
