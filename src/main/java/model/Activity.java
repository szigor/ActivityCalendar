package me.igor.ActivityCalendarProject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String place;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date;


    @ManyToMany(cascade = CascadeType.ALL)
    private List<User> participants;

}
