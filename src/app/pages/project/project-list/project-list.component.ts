import { Phase } from './../../../shared/model/Phase';
import { Project } from './../../../shared/model/Project';
import chartData from '../../../shared/data/data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  chartData: Project[] = chartData;
  selectedProject?: Project;
  selectedPhase?: Phase;

  constructor(private router: Router) {}

  onSelectProject(project: Project): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
    this.router.navigate(['/project/', this.selectedProject.number]);
  }

  onSelectPhase(phase: Phase): void {
    this.selectedPhase = phase;
  }

  // totalPhasePercentage(project: Project) {
  //   project.data.forEach((phase: Phase) => {
  //     return 'a' + phase.completed;
  //   });
  // }

  ngOnInit(): void {}
}
