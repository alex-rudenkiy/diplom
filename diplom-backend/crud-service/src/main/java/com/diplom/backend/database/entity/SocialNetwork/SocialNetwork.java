package com.diplom.backend.database.entity.SocialNetwork;

import com.diplom.backend.database.entity.File.FileEntity;
import lombok.*;

import javax.persistence.*;

@SuppressWarnings("ALL")
@Entity
@Table (name = "SocialNetwork")
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class SocialNetwork {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @Column(name = "endpoint", nullable = false)
    @NonNull
    private String endpoint;

    @Column(name = "name", nullable = false)
    @NonNull
    private String name;

    @Column(name = "logoUrl", nullable = false)
    @NonNull
    private String logoUrl;

    @Column(name = "fullName", nullable = false)
    @NonNull
    private String fullName;

    @Column(name = "hint", nullable = false)
    @NonNull
    private String hint;

}
