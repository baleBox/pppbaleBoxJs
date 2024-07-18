package ru.kata.spring.boot_security.demo.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/admin/users")
public class RestAdminController {

    private final UserService userService;

    @GetMapping()
    public List<User> userList() {
        return userService.userList();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") long id) {
        return userService.getUser(id);
    }

    @PutMapping()
    public String updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return "User was successfully edited";
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Long id) {
        userService.removeUser(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
