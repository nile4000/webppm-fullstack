package entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "project")
@Table(name = "project")
public class Project extends PanacheEntity {

    public Project() {
    }

    public String number;
    public String name;
    public String description;

    @OneToMany(cascade = CascadeType.ALL, 
    mappedBy = "project", 
    fetch = FetchType.LAZY, 
    orphanRemoval = true)
    public List<Phase> data = new ArrayList<>();
}
