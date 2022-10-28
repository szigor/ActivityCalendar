package me.igor.ActivityCalendarProject.repository;

import me.igor.ActivityCalendarProject.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}
