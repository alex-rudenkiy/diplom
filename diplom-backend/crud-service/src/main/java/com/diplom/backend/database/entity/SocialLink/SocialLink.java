package com.diplom.backend.database.entity.SocialLink;

import com.diplom.backend.database.entity.SocialNetwork.SocialNetwork;
import lombok.*;

import javax.persistence.*;

@SuppressWarnings("ALL")
@Entity
@Table (name = "SocialLink")
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
public class SocialLink {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @OneToOne
    @JoinColumn(name="social_type", nullable=false)
    @NonNull
    private SocialNetwork socialType;

    @Column(name = "payload", nullable = false)
    @NonNull
    private String payload;
}
