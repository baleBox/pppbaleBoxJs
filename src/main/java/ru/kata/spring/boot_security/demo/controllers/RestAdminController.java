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
    public ResponseEntity<List<User>> listUsers() {
        List<User> userList = userService.findAll();
        return ResponseEntity.ok(userList);
    }


    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id") Long id) {
        User user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping()
    public ResponseEntity<HttpStatus> create(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @PatchMapping("/{id}")
    public ResponseEntity<HttpStatus> update(@PathVariable ("id")Long id, @RequestBody User user) {
        userService.update(id,user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
