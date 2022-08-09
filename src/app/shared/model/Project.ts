import { Phase, PhaseDto } from './Phase';
export class Project {
  constructor(
    public id: string,
    public name: string,
    public type: any,
    public description: string,
    public data: Phase[] = []
  ) {}
}

export interface ProjectDto {
  id: string;
  name: string;
  type: any;
  description: string;
  data: PhaseDto[];
}
