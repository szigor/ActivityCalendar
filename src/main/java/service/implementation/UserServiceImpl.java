package me.igor.ActivityCalendarProject.service.implementation;

import me.igor.ActivityCalendarProject.model.User;
import me.igor.ActivityCalendarProject.repository.UserRepository;
import me.igor.ActivityCalendarProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }
}
