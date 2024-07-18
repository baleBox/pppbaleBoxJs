package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> userList();

    User getUser(Long id);

    void updateUser(User user);

    void removeUser(Long id);

    Optional<User> getByUsername(String username);

}
