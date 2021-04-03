package com.diplom.backend.database.entity.SocialLink;

import com.diplom.backend.database.entity.SocialNetwork.SocialNetwork;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocialLinkRepository extends JpaRepository<SocialLink, Long> {
}
