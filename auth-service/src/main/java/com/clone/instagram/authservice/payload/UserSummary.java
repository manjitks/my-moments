package com.clone.instagram.authservice.payload;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class UserSummary {

    private UUID id;
    private String username;
    private String name;
    private String profilePicture;
}
