package ru.kata.spring.boot_security.demo.controllers;

import lombok.NoArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.models.User;

@RestController
@NoArgsConstructor
@RequestMapping("/api/user/info")

public class RestUserController {

    @GetMapping()
    public User showUser(@AuthenticationPrincipal User user){
        return user;
    }
}
