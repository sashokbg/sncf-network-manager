package fr.sncf.sncfnetworkmanager;

import fr.sncf.sncfnetworkmanager.repository.Clm;
import fr.sncf.sncfnetworkmanager.repository.ClmRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "localhost:")
@RestController
public class ClmController {

    private ClmRepository clmRepository;

    public ClmController(ClmRepository clmRepository) {
        this.clmRepository = clmRepository;
    }

    @GetMapping("/api/clms")
    public List<Clm> listClms(){
        return clmRepository.findAll();
    }

    @GetMapping("/api/clms/{id}")
    public Clm getClm(@PathVariable("id") Long id){
        return clmRepository.findById(id).orElse(null);
    }
}
