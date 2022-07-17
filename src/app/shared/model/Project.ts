import { Phase } from './Phase';
export class Project {
  constructor(
    public number: string,
    public name: string,
    public type: any,
    public description: string,
    public data: Phase[] = []
  ) {}
}
