package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.List;

public interface RoleService {

    public List<Role> roleList();

    public void addRole(Role role);

    public Role getRole(Long id) ;
}
