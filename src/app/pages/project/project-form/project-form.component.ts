import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ProjectService, ProjectDto } from '../service/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  project!: ProjectDto;

  constructor(private service: ProjectService, private router: Router) {}

  projectForm = new UntypedFormGroup({
    projectNumber: new UntypedFormControl({ disabled: 'true' }),
    projectName: new UntypedFormControl(),
    projectDescription: new UntypedFormControl(),
    projectStart: new UntypedFormControl({ disabled: 'true', value: 'dd.MM.yyyy' }),
    projectEnd: new UntypedFormControl({ disabled: 'true', value: 'dd.MM.yyyy' }),
  });

  ngOnInit(): void {
    setTimeout(() => {
      // set initial projectNumber from service last_id
      this.service.getLastProjectId().subscribe(id => {
        // if id is null, set it to 1
        if (!id) {
          id = 1;
        }
        this.projectForm.controls.projectNumber.setValue(id);
      });
    }, 100);
  }

  retrieveFormDataProject(): ProjectDto {
    // retrieve project from form
    this.project = {
      name: this.projectForm.get('projectName').value,
      number: this.projectForm.get('projectNumber').value,
      description: this.projectForm.get('projectDescription').value,
      type: undefined,
      data: [],
    };
    return this.project;
  }

  onSubmit() {
    // adding project from form to service
    this.service
      .createProject(this.retrieveFormDataProject())
      .subscribe((data: ProjectDto) => {
        this.router.navigate(['/']);
      });
  }
}
