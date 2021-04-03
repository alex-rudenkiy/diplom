package com.diplom.backend.database.entity.AppealEvent;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@SuppressWarnings("ALL")
@Entity
@Table(name = "AppealEvent")
@Data
public class AppealEvent {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id", updatable = false, nullable = false, unique=true)
        private Long id;

        @Column(name = "created_at")
        private Date created_at;

        @Column(name = "title")
        private String title;

        @Column(name = "attachment")
        private String history;
}
