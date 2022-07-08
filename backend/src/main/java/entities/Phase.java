package entities;

import java.time.LocalDate;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "phase")
@Table(name = "phase")
public class Phase extends PanacheEntity {

    public Phase() {
    }

    public String name;
    public LocalDate start;
    public LocalDate end;
    public Double completed;

    @ManyToOne
    @JsonbTransient
    public Project project;

    @ManyToOne(optional = false)
    @JoinColumn(name = "project_id", nullable = false, updatable = false)
    public Project getProject() {
        return project;
    }

}
