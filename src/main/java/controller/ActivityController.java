package me.igor.ActivityCalendarProject.controller;

import lombok.extern.slf4j.Slf4j;
import me.igor.ActivityCalendarProject.model.Activity;
import me.igor.ActivityCalendarProject.model.User;
import me.igor.ActivityCalendarProject.service.ActivityService;
import me.igor.ActivityCalendarProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @Autowired
    private UserService userService;

    @GetMapping(path = "/activities")
    public List<Activity> getActivities() {
        return activityService.getAll();
    }

    @GetMapping(path = "/activity/{id}")
    public Optional<Activity> getActivityById(@PathVariable Integer id) {
        return activityService.getById(id);
    }

    @DeleteMapping(path = "/activity/delete/{id}")
    public ResponseEntity<Integer> deleteActivityById(@PathVariable Integer id) {
        activityService.deleteById(id);
        return ResponseEntity.ok(id);
    }

    @PostMapping(path = "/activity/save")
    public ResponseEntity<Activity> saveActivity(@RequestBody Activity activity) {
        activityService.save(activity);
        return ResponseEntity.ok(activity);
    }

    @PutMapping(path = "/activity/update")
    public ResponseEntity<Activity> updateActivity(@RequestBody Activity activity) {
        activityService.save(activity);
        return ResponseEntity.ok(activity);
    }

}
