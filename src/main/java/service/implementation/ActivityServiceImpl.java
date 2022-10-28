package me.igor.ActivityCalendarProject.service.implementation;

import lombok.extern.slf4j.Slf4j;
import me.igor.ActivityCalendarProject.model.Activity;
import me.igor.ActivityCalendarProject.repository.ActivityRepository;
import me.igor.ActivityCalendarProject.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public List<Activity> getAll() {
        return activityRepository.findAll();
    }

    @Override
    public Optional<Activity> getById(Integer id) {
        return Optional.ofNullable(activityRepository.findById(id).orElseThrow(() -> new RuntimeException("Activity with id " + id + " does not exist.")));
    }

    @Override
    public void save(Activity activity) {
        activityRepository.save(activity);
    }

    @Override
    public void deleteById(Integer id) {
        activityRepository.deleteById(id);
    }

}
