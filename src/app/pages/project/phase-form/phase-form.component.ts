import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhaseDto } from '../service/project.service';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.scss'],
})
export class PhaseFormComponent {
  phase!: PhaseDto;

  constructor(private router: Router) {}

  phaseForm = new UntypedFormGroup({
    phaseName: new UntypedFormControl(),
    phaseStart: new UntypedFormControl(),
    phaseEnd: new UntypedFormControl(),
    phaseCompleted: new UntypedFormControl(0),
    phaseMilestone: new UntypedFormControl(false),
  });

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
    };
    return this.phase;
  }
}
