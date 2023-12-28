package com.backend.Backend.repositories;

import com.backend.Backend.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface AppUserRepo extends JpaRepository<AppUser, UUID> {
    AppUser findByEmail(String email);
}
