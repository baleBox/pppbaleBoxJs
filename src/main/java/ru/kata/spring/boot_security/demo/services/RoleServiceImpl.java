package ru.kata.spring.boot_security.demo.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.repositories.RoleRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Transactional
    @Override
    public List<Role> roleList() {
        return roleRepository.findAll();
    }

    @Override
    @Transactional
    public void addRole(Role role) {
        roleRepository.save(role);
    }

    @Override
    @Transactional
    public Role getRole(Long id) {
        Optional<Role> role = roleRepository.findById(id);

        return role.orElseThrow(() -> new UsernameNotFoundException("Role  not found"));
    }
}

