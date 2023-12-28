package com.backend.Backend.api;

import com.backend.Backend.entities.Course;
import com.backend.Backend.interfaces.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class CourseController implements CourseService {
    @Autowired
    private CourseService courseService;
    //@PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PostMapping("/register_course")
    @Override
    public boolean registerCourse(@RequestBody Course course) {
        return courseService.registerCourse(course);
    }
    //@PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @PutMapping("/edit_course/{id}")
    @Override
    public boolean editCourse(@PathVariable("id") UUID id, @RequestBody Course editedCourse) {
        return courseService.editCourse(id, editedCourse);
    }
    //@PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    @DeleteMapping("/delete_course/{id}")
    @Override
    public boolean deleteCourse(@PathVariable("id") UUID id) {
        return courseService.deleteCourse(id);
    }
    //@PreAuthorize("permitAll()")
    @GetMapping("/fetch_courses")
    @Override
    public List<Course> fetchCourses() {
        return courseService.fetchCourses();
    }
}
