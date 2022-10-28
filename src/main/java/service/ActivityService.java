package me.igor.ActivityCalendarProject.service;

import me.igor.ActivityCalendarProject.model.Activity;

import java.util.List;
import java.util.Optional;

public interface ActivityService {

    List<Activity> getAll();

    Optional<Activity> getById(Integer id);

    void save(Activity activity);

    void deleteById(Integer id);

}
