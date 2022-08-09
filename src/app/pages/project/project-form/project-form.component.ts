import { Phase } from './../../../shared/model/Phase';
import { Router, ActivatedRoute } from '@angular/router';
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
  phaseData: Phase[] = [];
  lastProjectId: number;
  creatingProject: boolean = false;

  constructor(
    private service: LocalProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  projectForm = new UntypedFormGroup({
    projectId: new UntypedFormControl(''),
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
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('projectId');
      if (projectId) {
        this.creatingProject = false;
        this.getProjects(projectId);
      }
      if (!projectId) {
        this.creatingProject = true;
        setTimeout(() => {
          // set initial projectNumber from service last_id
          this.service.getLastProjectId().subscribe(id => {
            // if id is null, set it to 1
            if (!id) {
              id = 1;
            }
            this.lastProjectId = id;
            this.projectForm.controls.projectId.setValue(id);
          });
        }, 100);
      }
    });
  }

  getProjects(projectId: string) {
    this.service.getProject(projectId).subscribe(project => {
      this.project = project;
      this.projectForm.patchValue({
        projectId: project.id,
        projectName: project.name,
        projectDescription: project.description,
        projectStart: project.data[0].start,
        projectEnd: project.data[0].end,
      });
    });
  }

  retrieveFormDataProject(): ProjectDto {
    if (this.creatingProject) {
      // adding initial dummy-phase to project
      this.phaseData.push({
        name: 'Phase 1',
        start: Date.UTC(2022, 0, 1),
        end: Date.UTC(2022, 1, 1),
        y: this.lastProjectId,
        completed: 0,
        milestone: false,
      });
    }
    if (!this.creatingProject) {
      this.phaseData = this.project.data;
    }

    // retrieve projectdata from formfields
    this.project = {
      id: this.projectForm.get('projectId').value,
      name: this.projectForm.get('projectName').value,
      type: undefined,
      description: this.projectForm.get('projectDescription').value,
      // adding a dummy-phase to project
      data: this.phaseData,
    };
    return this.project;
  }

  onSubmit() {
    if (this.creatingProject) {
      // submit project to service
      this.service.createProject(this.retrieveFormDataProject());
    }
    if (!this.creatingProject) {
      this.service.updateProject(this.retrieveFormDataProject());
    }
    // navigate back to project-list
    this.router.navigate(['/']);
  }
}
