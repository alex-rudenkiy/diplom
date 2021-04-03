package com.diplom.backend.database.entity.Comment;

import com.diplom.backend.database.entity.User.Users;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@SuppressWarnings("ALL")
@Entity
@Table(name = "Comment")
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @Column(name = "enabled")
    private String enabled;

    @Column(name = "created_at")
    private Date createdAt;

    @JoinColumn(name = "created_by")
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Users createdBy;

    @Column(name = "content")
    private String content;

}
