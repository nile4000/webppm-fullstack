import { Phase, PhaseDto } from './Phase';
export class Project {
  constructor(
    public number: string,
    public name: string,
    public type: any,
    public description: string,
    public data: Phase[] = []
  ) {}
}

export interface ProjectDto {
  number: string;
  name: string;
  type: any;
  description: string;
  data: PhaseDto[];
}
