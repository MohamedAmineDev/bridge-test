package com.backend.Backend.interfaces;

import com.backend.Backend.entities.Course;

import java.util.List;
import java.util.UUID;

public interface CourseService {
    boolean registerCourse(Course course);

    boolean editCourse(UUID id, Course editedCourse);

    boolean deleteCourse(UUID id);

    List<Course> fetchCourses();
}
