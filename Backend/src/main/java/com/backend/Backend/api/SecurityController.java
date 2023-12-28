package com.backend.Backend.api;

import com.backend.Backend.entities.AppUser;
import com.backend.Backend.repositories.AppUserRepo;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class SecurityController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtEncoder jwtEncoder;
    @Autowired
    private AppUserRepo userRepo;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody AppUser user) {
        String email = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        Instant actualTime = Instant.now();
        String scope = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(" "));
        AppUser found = userRepo.findByEmail(email);
        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
                .issuedAt(actualTime)
                .expiresAt(actualTime.plus(1, ChronoUnit.DAYS))
                .subject(email)
                .claim("scope", scope)
                .claim("username", found.getUsername())
                .build();
        JwtEncoderParameters jwtEncoderParameters = JwtEncoderParameters.from(
                JwsHeader.with(MacAlgorithm.HS256).build(), jwtClaimsSet
        );
        String token = jwtEncoder.encode(jwtEncoderParameters).getTokenValue();
        return Map.of("access-token", token);
    }

    @GetMapping("/profile")
    public Authentication myAuthentication(Authentication authentication) {
        return authentication;
    }

    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @GetMapping("/admin")
    public String adminGreeting() {
        return "Good morning ADMIN !";
    }

    @PreAuthorize("hasAuthority('SCOPE_USER')")
    @GetMapping("/user")
    public String userGreeting() {
        return "Good morning USER !";
    }
}
