package ru.kata.spring.boot_security.demo.services;

import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.repositories.UserRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MyUserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> user = userRepository.findByUsername(username);
        Hibernate.initialize(user.get().getRoles());

//        if (user.isEmpty()) {
//            throw new UsernameNotFoundException(String.format("User '%s' not found", username));
//        }

        return user.orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
