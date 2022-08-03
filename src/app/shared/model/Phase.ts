export class Phase {
  constructor(
    public name: string = '',
    public start: number = 0,
    public end: number = 0,
    public y: number = null,
    public completed: number = 0,
    public milestone: boolean = false
  ) {}
}

export interface PhaseDto {
  name: string;
  start: number;
  end: number;
  y: number;
  completed: number;
  milestone: boolean;
}
