package com.clone.instagram.authservice.repository;

import com.clone.instagram.authservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface UserRepository extends MongoRepository<User, UUID> {

    Optional<User> findByUsername(String username);
    List<User> findByUsernameIn(List<String> usernames);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
