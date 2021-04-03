package com.diplom.backend.database.entity.Appeal;

import com.diplom.backend.database.entity.AppealEvent.AppealEvent;
import com.diplom.backend.database.entity.Attachment.Attachment;
import com.diplom.backend.database.entity.Comment.Comment;
import com.diplom.backend.database.entity.User.Users;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@SuppressWarnings("ALL")
@Entity
@Table(name = "Appeal")
@Data
public class Appeal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @Column(name = "enabled")
    private Boolean enabled;

    @JoinColumn(name = "ownerId", nullable = true)
    @ManyToOne(cascade = CascadeType.MERGE)
    private Users ownerId;

    @Column(name = "views")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Users> views;

    @Column(name = "status")
    private String status;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    private String category;

    @Column(name = "history")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<AppealEvent> appealEvents;

    @Column(name = "attachments")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Attachment> attachments;

    @Column(name = "comments")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Comment> comments;

    @Column(name = "confirmed")
    private Boolean confirmed;
}
