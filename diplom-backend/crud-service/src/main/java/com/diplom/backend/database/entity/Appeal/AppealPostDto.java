package com.diplom.backend.database.entity.Appeal;

import com.diplom.backend.database.entity.AppealEvent.AppealEvent;
import com.diplom.backend.database.entity.Attachment.Attachment;
import com.diplom.backend.database.entity.Comment.Comment;
import com.diplom.backend.database.entity.User.Users;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
public class AppealPostDto {
    private Long id;

//    private Boolean enabled;

    private String ownerToken;

    private Set<Users> views;

    private String status;

    private String title;

    private String description;

    private String category;

/*
    private Set<AppealEvent> appealEvents;

    private Set<Attachment> attachments;

    private Set<Comment> comments;

    private Boolean confirmed;
*/
}
