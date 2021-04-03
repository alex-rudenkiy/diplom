package com.diplom.backend.database.entity.User.Dto;

import com.diplom.backend.database.entity.Appeal.Appeal;
import com.diplom.backend.database.entity.File.FileEntity;
import com.diplom.backend.database.entity.Role.Role;
import com.diplom.backend.database.entity.SocialLink.SocialLink;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
public class UserPostDto {
    private Long id;

    private java.sql.Timestamp created_at;

    private Boolean enabled = true;

    private Boolean confirmed = false;

    private Boolean temporal = false;

    private Role role;

    private String login;

    private String surname;

    private String name;

    private String patronymic;

    private String description="";

    private String mobilenumber;

    private String passwordHash;

    private String avatarFileFakeUrl;

    private Set<SocialLinkDto> socialLink;
}
