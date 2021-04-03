package com.diplom.backend.database.entity.Attachment;

import com.diplom.backend.database.entity.File.FileEntity;
import com.diplom.backend.database.entity.User.Users;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@SuppressWarnings("ALL")
@Entity
@Table(name = "Attachment")
@Data
public class Attachment {
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

    @JoinColumn(name = "fileEntity")
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private FileEntity fileEntity;

    @Column(name = "confirmed")
    private Boolean confirmed;
}
