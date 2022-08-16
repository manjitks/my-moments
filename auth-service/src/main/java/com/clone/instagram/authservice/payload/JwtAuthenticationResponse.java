package com.clone.instagram.authservice.payload;


import com.clone.instagram.authservice.model.User;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class JwtAuthenticationResponse {

    @NonNull
    private String accessToken;
    private String tokenType = "Bearer";
    @NonNull
    private User user;
}
