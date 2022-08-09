import { LocalProjectService } from './../service/localProject.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PhaseDto } from 'src/app/shared/model/Phase';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.scss'],
})
export class PhaseFormComponent implements OnInit {
  phase!: PhaseDto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: LocalProjectService
  ) {}

  phaseForm = new UntypedFormGroup({
    phaseName: new UntypedFormControl(),
    phaseStart: new UntypedFormControl(),
    phaseEnd: new UntypedFormControl(),
    phaseCompleted: new UntypedFormControl(0),
    phaseMilestone: new UntypedFormControl(false),
  });

  ngOnInit(): void {
    this.getPhase();
  }

  getPhase(): void {
    this.route.paramMap.subscribe(params => {
      const phaseId = params.get('phaseId');
      if (phaseId) {
        this.service.getPhaseById(phaseId);
      }
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  retrieveFormDataProject(): PhaseDto {
    // retrieve phase-data from form
    this.phase = {
      name: this.phaseForm.get('phaseName').value,
      start: this.phaseForm.get('phaseStart').value,
      end: this.phaseForm.get('phaseEnd').value,
      completed: this.phaseForm.get('phaseCompleted').value,
      y: undefined,
      milestone: this.phaseForm.get('phaseMilestone').value,
    };
    return this.phase;
  }
}
