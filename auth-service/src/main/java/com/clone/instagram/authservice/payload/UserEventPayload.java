package com.clone.instagram.authservice.payload;


import com.clone.instagram.authservice.messaging.UserEventType;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class UserEventPayload {

    private UUID id;
    private String username;
    private String email;
    private String displayName;
    private String profilePictureUrl;
    private String oldProfilePicUrl;
    private UserEventType eventType;
}
