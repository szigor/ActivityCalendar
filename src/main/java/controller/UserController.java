package me.igor.ActivityCalendarProject.controller;

import me.igor.ActivityCalendarProject.model.Activity;
import me.igor.ActivityCalendarProject.model.User;
import me.igor.ActivityCalendarProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/user/all")
    public List<User> getUsers() {
        return userService.getAll();
    }

    @PostMapping(path = "/user/save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(user);
    }

}
