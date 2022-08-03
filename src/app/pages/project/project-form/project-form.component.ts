import { Phase } from './../../../shared/model/Phase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ProjectDto } from 'src/app/shared/model/Project';
import { LocalProjectService } from '../service/localProject.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  project!: ProjectDto;
  initialPhaseData: Phase[] = [];

  constructor(private service: LocalProjectService, private router: Router) {}

  projectForm = new UntypedFormGroup({
    projectNumber: new UntypedFormControl(''),
    projectName: new UntypedFormControl(),
    projectDescription: new UntypedFormControl(),
    projectStart: new UntypedFormControl({
      disabled: 'true',
      value: 'dd.MM.yyyy',
    }),
    projectEnd: new UntypedFormControl({
      disabled: 'true',
      value: 'dd.MM.yyyy',
    }),
  });

  ngOnInit(): void {
    // setTimeout(() => {
    //   // set initial projectNumber from service last_id
    //   this.service.getLastProjectId().subscribe(id => {
    //     // if id is null, set it to 1
    //     if (!id) {
    //       id = 1;
    //     }
    //     this.projectForm.controls.projectNumber.setValue(id);
    //   });
    // }, 100);
  }

  retrieveFormDataProject(): ProjectDto {
    // adding dummy-phase to project
    this.initialPhaseData.push({
      name: 'Phase 1',
      start: Date.UTC(2022, 0, 1),
      end: Date.UTC(2022, 1, 1),
      y: 2,
      completed: 0,
      milestone: false,
    });

    // retrieve projectdata from formfields
    this.project = {
      number: this.projectForm.get('projectNumber').value,
      name: this.projectForm.get('projectName').value,
      type: undefined,
      description: this.projectForm.get('projectDescription').value,
      // adding dummy-phase to project
      data: this.initialPhaseData,
    };
    return this.project;
  }

  onSubmit() {
    // adding projectdata
    this.service.createProject(this.retrieveFormDataProject());
    // navigate to project-list
    this.router.navigate(['/']);
  }
}
