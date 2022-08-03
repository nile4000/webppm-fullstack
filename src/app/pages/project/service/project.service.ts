import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProjectDto } from 'src/app/shared/model/Project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  createProject(project: ProjectDto) {
    return this.httpClient
      .post(`${environment.backendService}/project`, project)
      .pipe(catchError(this.errorHandler));
  }

  getProjects(): Observable<ProjectDto[]> {
    return this.httpClient.get(`${environment.backendService}/project`).pipe(
      map((result: any) =>
        result.map((project, i) => {
          return {
            name: project.name,
            type: undefined,
            data: project.data.map(phase => {
              return {
                name: phase.name,
                start: Date.UTC(
                  Number(phase.start.substring(0, 4)),
                  Number(phase.start.substring(5, 7)),
                  Number(phase.start.substring(8, 10))
                ),
                end: Date.UTC(
                  Number(phase.end.substring(0, 4)),
                  Number(phase.end.substring(5, 7)),
                  Number(phase.end.substring(8, 10))
                ),
                completed: phase.completed,
                y: i,
              };
            }),
          };
        })
      ),
      catchError(this.errorHandler)
    );
  }

  getLastProjectId(): Observable<Number> {
    return this.httpClient
      .get<Number>(`${environment.backendService}/project/last_id`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Fehler beim laden der Daten');
  }
}
