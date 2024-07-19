package ru.kata.spring.boot_security.demo.configs;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.List;

@Component
@RequiredArgsConstructor
public class Init {

    private final UserService userService;
    private final RoleService roleService;

    @PostConstruct
    public void initDb() {

        if (roleService.getAllUser().isEmpty()) {
            roleService.save(new Role(1L,"ROLE_USER"));
            roleService.save(new Role(2L,"ROLE_ADMIN"));
        }

        if (userService.findAll().isEmpty()) {
            User admin = new User();
            admin.setId(1L);
            admin.setFirstName("Admin");
            admin.setLastName("Adminov");
            admin.setAge(37);
            admin.setUsername("admin@mail.com");
            admin.setPassword("admin");
            admin.setRoles(new HashSet<>(List.of(new Role(2L, "ROLE_ADMIN"))));
            userService.update(2L, admin);

            User user = new User();
            user.setId(2L);
            user.setFirstName("User");
            user.setLastName("Userov");
            user.setAge(27);
            user.setUsername("user@mail.com");
            user.setPassword("user");
            user.setRoles(new HashSet<>(List.of(new Role(1L, "ROLE_USER"))));
            userService.update(1L, user);
        }
    }
}


