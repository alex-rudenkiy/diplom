package com.diplom.backend.database.entity.File;

import com.diplom.backend.database.entity.User.Users;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@SuppressWarnings("ALL")
@Entity
@Table(name = "FileEntity")
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class FileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

    @JoinColumn(name = "created_by")
    @OneToOne()
    private Users createdBy;

    @Column(name = "src_filename")
    @NonNull
    private String sourceFilename;

    @Column(name = "shrt_filename")
    @NonNull
    private String shortFilename;

    @Column(name = "enabled")
    @NonNull
    private Boolean enabled;
}
