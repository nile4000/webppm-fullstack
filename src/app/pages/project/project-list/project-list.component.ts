import { Phase } from './../../../shared/model/Phase';
import { Project } from './../../../shared/model/Project';
import chartData from '../../../shared/data/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  chartData: Project[] = chartData;
  selectedProject?: Project;
  selectedPhase?: Phase;

  onSelectProject(project: Project): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }

  onSelectPhase(phase: Phase): void {
    this.selectedPhase = phase;
  }

  ngOnInit(): void {}
}
