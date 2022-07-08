package controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import entities.Phase;

@Path("phase")
public class PhaseResource {

    @GET
    public List<Phase> phases() {
        return Phase.listAll();
    }
}
