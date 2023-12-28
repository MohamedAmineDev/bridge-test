package com.backend.Backend.services;

import com.backend.Backend.entities.Course;
import com.backend.Backend.interfaces.CourseService;
import com.backend.Backend.repositories.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class CourseServiceImplementation implements CourseService {
    @Autowired
    private CourseRepo courseRepo;

    @Override
    public boolean registerCourse(Course course) {
        if (course != null) {
            courseRepo.saveAndFlush(course);
            return true;
        }
        return false;
    }

    @Override
    public boolean editCourse(UUID id, Course editedCourse) {
        var found = courseRepo.findById(id).orElse(null);
        if (found != null && editedCourse != null) {
            if (found.getTitle() != null) {
                if (!found.getTitle().equalsIgnoreCase(editedCourse.getTitle()) && !Objects.equals(editedCourse.getTitle(), "") && !Objects.equals(editedCourse.getTitle(), null)) {
                    found.setTitle(editedCourse.getTitle());
                }
            } else {
                found.setTitle(editedCourse.getTitle());
            }
            if (found.getImageUrl() != null) {
                if (!found.getImageUrl().equalsIgnoreCase(editedCourse.getImageUrl()) && !Objects.equals(editedCourse.getImageUrl(), "") && !Objects.equals(editedCourse.getImageUrl(), null)) {
                    found.setImageUrl(editedCourse.getImageUrl());
                }
            } else {
                found.setImageUrl(editedCourse.getImageUrl());
            }
            if (found.getPrice() != editedCourse.getPrice() && editedCourse.getPrice() > 0) {
                found.setPrice(editedCourse.getPrice());
            }
            courseRepo.saveAndFlush(found);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteCourse(UUID id) {
        var found = courseRepo.findById(id).orElse(null);
        if (found != null) {
            courseRepo.delete(found);
            courseRepo.flush();
            return true;
        }
        return false;
    }

    @Override
    public List<Course> fetchCourses() {
        return courseRepo.findAll();
    }
}
