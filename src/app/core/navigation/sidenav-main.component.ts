import { ProjectService } from './../../pages/project/service/project.service';
import { Component } from '@angular/core';

@Component({
  selector: 'sidenav-main',
  templateUrl: 'sidenav-main.component.html',
  styleUrls: ['sidenav-main.component.scss'],
})
export class SidenavMain {
  collapsed = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects();
  }
}
