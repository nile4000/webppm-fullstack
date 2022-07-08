package controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Stream;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dtos.ProjectDto;
import entities.Phase;
import entities.Project;

@Path("project")
public class ProjectResource {

    @GET
    public List<Project> projects() {
        return Project.listAll();
    }

    // get the last added project id
    @GET
    @Path("/last_id")
    @Produces(MediaType.APPLICATION_JSON)
    public Long lastId() {
        try (Stream<Project> projects = Project.streamAll()) {
            return projects
                    .map(p -> p.id)
                    .max(Long::compare).orElse(0L);
        }

    }

    @POST
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addProject(ProjectDto projectDto) {

        // Generate test project with phases
        Project project = new Project();
        project.number = projectDto.number;
        project.name = projectDto.name;
        project.description = projectDto.description;
        project.persist();

        Phase phase1 = new Phase();
        Phase phase2 = new Phase();
        Phase phase3 = new Phase();
        Phase phase4 = new Phase();

        phase1.name = "Initialisierung";
        phase2.name = "Konzeption";
        phase3.name = "Realisierung";
        phase4.name = "Einführung";

        phase1.start = LocalDate.of(2022, 1, 1);
        phase2.start = LocalDate.of(2022, 2, 27);
        phase3.start = LocalDate.of(2022, 3, 3);
        phase4.start = LocalDate.of(2022, 5, 13);

        phase1.end = LocalDate.of(2022, 2, 16);
        phase2.end = LocalDate.of(2022, 2, 19);
        phase3.end = LocalDate.of(2022, 5, 1);
        phase4.end = LocalDate.of(2022, 5, 20);

        phase1.completed = 1.0;
        phase3.completed = 1.0;
        phase3.completed = 0.89;
        phase4.completed = 0.0;

        phase1.project = project;
        phase2.project = project;
        phase3.project = project;
        phase4.project = project;

        phase1.persist();
        phase2.persist();
        phase3.persist();
        phase4.persist();

        return Response.ok(project).build();
    }

}
