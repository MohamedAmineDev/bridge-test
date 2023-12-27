package com.backend.Backend.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppUser implements Serializable {
    private UUID id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
}
