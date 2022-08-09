import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import chartData from 'src/app/shared/data/data';
import { ProjectDto } from 'src/app/shared/model/Project';

@Injectable({
  providedIn: 'root',
})
export class LocalProjectService {
  constructor(private httpClient: HttpClient) {}

  createProject(project: ProjectDto) {
    return chartData.push(project);
  }

  updateProject(project: ProjectDto) {
    const index = chartData.findIndex(p => p.id === project.id);
    chartData[index] = project;
  }

  getProjects(): Observable<ProjectDto[]> {
    return of(chartData);
  }

  getProject(id: string): Observable<ProjectDto> {
    const project = chartData.find(project => project.id === id)!;
    return of(project);
  }

  getLastProjectId(): Observable<number> {
    return of(chartData.length);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Fehler beim laden der Daten');
  }
}
