package ru.kata.spring.boot_security.demo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("login").setViewName("index");
//        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/user/info").setViewName("user/info");
        registry.addViewController("/admin/users").setViewName("admin/users");

    }
}
