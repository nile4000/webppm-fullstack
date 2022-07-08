export class Phase {
  constructor(
    public name: string,
    public start: number,
    public end: number,
    public y: number,
    public completed: number,
    public milestone: boolean,
  ) {}
}
