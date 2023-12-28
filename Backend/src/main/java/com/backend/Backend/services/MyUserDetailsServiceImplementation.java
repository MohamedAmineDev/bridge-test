package com.backend.Backend.services;

import com.backend.Backend.entities.AppRole;
import com.backend.Backend.repositories.AppRoleRepo;
import com.backend.Backend.repositories.AppUserRepo;
import com.backend.Backend.entities.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsServiceImplementation implements UserDetailsService, MyUserDetailsService {
    @Autowired
    private AppUserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AppRoleRepo roleRepo;

    @Override
    public boolean registerUser(AppUser user) {
        if (user != null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepo.saveAndFlush(user);
            return true;
        }
        return false;
    }

    @Override
    public AppUser loadProfile(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public AppRole loadRole(String name) {
        return roleRepo.findByName(name);
    }

    @Override
    public boolean registerRole(String name) {
        var role = loadRole(name);
        if (role == null) {
            roleRepo.saveAndFlush(AppRole.builder().name(name).build());
            return true;
        }
        return false;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepo.findByEmail(username);
        String[] roles = user.getRoles().stream().map(AppRole::getName).toArray(String[]::new);
        return User.builder()
                .username(username)
                .roles(roles)
                .password(user.getPassword())
                .build();
    }
}
