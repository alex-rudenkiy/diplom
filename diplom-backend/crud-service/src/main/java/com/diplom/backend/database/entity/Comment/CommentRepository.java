package com.diplom.backend.database.entity.Comment;

import com.diplom.backend.database.entity.AppealEvent.AppealEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
