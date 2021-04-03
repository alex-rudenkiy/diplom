package com.diplom.backend.database.entity.Role;

import lombok.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@SuppressWarnings("ALL")
@Entity
@Table(name = "Role")
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    public Long id;

    @Column(name = "name")
    @NonNull
    public String name;

}

