package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        return existingUser.orElse(null);
    }
}
