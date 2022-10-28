package me.igor.ActivityCalendarProject.service;

import me.igor.ActivityCalendarProject.model.User;

import java.util.List;

public interface UserService {

    List<User> getAll();

    void save(User user);

}
