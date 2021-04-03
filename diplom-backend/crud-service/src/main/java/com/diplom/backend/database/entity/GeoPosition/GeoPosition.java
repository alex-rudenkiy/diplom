package com.diplom.backend.database.entity.GeoPosition;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;


@Table(name = "GeoPosition")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Proxy(lazy=false)
public class GeoPosition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    private Long id;

    @Column(name = "fullname")
    private String fullname;

    @Column(name = "lat")
    private double lat;

    @Column(name = "lon")
    private double lon;

}
