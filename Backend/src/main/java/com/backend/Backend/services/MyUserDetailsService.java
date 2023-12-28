package com.backend.Backend.services;

import com.backend.Backend.entities.AppRole;
import com.backend.Backend.entities.AppUser;

public interface MyUserDetailsService {
    boolean registerUser(AppUser user);

    AppUser loadProfile(String email);
    AppRole loadRole(String name);
    boolean registerRole(String name);
}
