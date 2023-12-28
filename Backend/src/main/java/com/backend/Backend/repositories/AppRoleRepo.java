package com.backend.Backend.repositories;

import com.backend.Backend.entities.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppRoleRepo extends JpaRepository<AppRole,String> {
    AppRole findByName(String name);
}
