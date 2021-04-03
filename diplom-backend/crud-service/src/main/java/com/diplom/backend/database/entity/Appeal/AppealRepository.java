package com.diplom.backend.database.entity.Appeal;

import com.diplom.backend.database.entity.Attachment.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppealRepository extends JpaRepository<Appeal, Long> {
}
