package fr.sncf.sncfnetworkmanager.repository;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ClmRepository extends CrudRepository<Clm, Long> {
    List<Clm> findAll();
}
