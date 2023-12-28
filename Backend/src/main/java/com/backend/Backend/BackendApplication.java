package com.backend.Backend;

import com.backend.Backend.entities.AppRole;
import com.backend.Backend.entities.AppUser;
import com.backend.Backend.repositories.AppRoleRepo;
import com.backend.Backend.repositories.AppUserRepo;
import com.backend.Backend.services.MyUserDetailsServiceImplementation;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner generateAdmin(AppUserRepo userRepo, AppRoleRepo roleRepo, MyUserDetailsServiceImplementation userDetailsServiceImplementation) {
        return args -> {
            var roles = roleRepo.findAll();
            if (roles.isEmpty()) {
                userDetailsServiceImplementation.registerRole("ROLE_ADMIN");
                userDetailsServiceImplementation.registerRole("ROLE_USER");
            }
            var users = userRepo.findAll();
            if (users.isEmpty()) {
                AppUser user = new AppUser();
                user.setEmail("admin@gmail.com");
                user.setPassword("123456789");
                user.setUsername("Admin2023");
                user.setRoles(roleRepo.findAll());
                userDetailsServiceImplementation.registerUser(user);
            }
        };
    }

}
