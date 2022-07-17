import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// Alternatively, this is how to load Highstock. Highmaps and Highcharts Gantt are similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';
import Draggable from 'highcharts/modules/draggable-points';
// Initialize exporting module. (CommonJS only)
Exporting(Highcharts);
Accessibility(Highcharts);
Draggable(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
