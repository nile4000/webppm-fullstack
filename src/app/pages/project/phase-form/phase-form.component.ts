import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  phaseForm = new FormGroup({
    phaseName: new FormControl(),
    phaseStart: new FormControl(),
    phaseEnd: new FormControl(),
    phaseCompleted: new FormControl(0),
    phaseMilestone: new FormControl(false),
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
