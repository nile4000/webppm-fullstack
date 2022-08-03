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
  number: number;
  name: string;
  description: string;
  type: any;
  data: PhaseDto[];
}
