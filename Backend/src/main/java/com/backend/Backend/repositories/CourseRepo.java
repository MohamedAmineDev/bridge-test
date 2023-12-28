package com.backend.Backend.repositories;

import com.backend.Backend.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CourseRepo extends JpaRepository<Course, UUID> {
    Course findByTitle(String title);
}
