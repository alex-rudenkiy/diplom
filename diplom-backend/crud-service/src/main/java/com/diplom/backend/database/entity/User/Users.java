package com.diplom.backend.database.entity.User;
import com.diplom.backend.database.entity.Appeal.Appeal;
import com.diplom.backend.database.entity.File.FileEntity;
import com.diplom.backend.database.entity.Role.Role;
import com.diplom.backend.database.entity.SocialLink.SocialLink;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.Hibernate;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Proxy;

import javax.persistence.Entity;

import javax.persistence.*;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("ALL")
@Entity
@Table (name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Transactional
@Proxy(lazy=false)
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false, unique=true)
    //@NotNull
    private Long id;

    @Column(name = "created_at", updatable = false)
    @CreationTimestamp
    private java.sql.Timestamp created_at;

    @Column(name = "enabled", nullable = false)
    @ColumnDefault("True")
    private Boolean enabled = true;

    @Column(name = "confirmed")
    private Boolean confirmed = false;

    @Column(name = "temporal")
    @ColumnDefault("false")
    private Boolean temporal = false;

    @JoinColumn(name = "role")
    @ManyToOne()
    //@ColumnDefault("0")
    private Role role;

    @Column(name = "login", nullable = false)
    @NotNull
    private String login;

    @Column(name = "surname", nullable = false)
    @NotNull
    private String surname;

    @Column(name = "name", nullable = false)
    @NotNull
    private String name;

    @Column(name = "patronymic", nullable = false)
    @NotNull
    private String patronymic;

    @Column(name = "description", nullable = false)
    private String description="";

    @Column(name = "mobilenumber", nullable = false)
    @NotNull
    private String mobilenumber;

    @Column(name = "passwordHash", nullable = false)
    @NotNull
    private String passwordHash;

    @Column(name = "socialsLinks", nullable = false)
    @OneToMany(cascade=CascadeType.ALL) //, fetch = FetchType.EAGER
    @NotNull
    private Set<SocialLink> socialLink = new HashSet();

    @Column(name = "supporting")
    @OneToMany()
    private Set<Appeal> supporting = new HashSet();

    @Column(name = "observation")
    @OneToMany()
    private Set<Appeal> observation = new HashSet();

    @Column(name = "gallery")
    @OneToMany()//cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<FileEntity> gallery = new HashSet();

    @Column(name = "avatarFileFakeUrl", nullable = false)
    @NotNull
    private String avatarFileFakeUrl;



/*    public Users(Users result) {
        this.setId(result.getId());
        this.setEnabled(result.getEnabled());
        this.setName(result.getName());
        this.setSurname(result.getSurname());
        this.setPatronymic(result.getPatronymic());
        this.setPasswordHash(result.getPasswordHash());
        this.setAvatarFileFakeUrl(result.getAvatarFileFakeUrl());
        this.setMobilenumber(result.getMobilenumber());
        this.setLogin(result.getLogin());
        this.setDescription(result.getDescription());
        this.setSocialLink(result.getSocialLink());
        this.setSupporting(result.getSupporting());
        this.setObservation(result.getObservation());
        this.setGallery(result.getGallery());

        if(result.getMobilenumber()==null || (result.getMobilenumber()!=null && result.getMobilenumber().length()==0)){
            this.setConfirmed(false);
        }
    }*/


/*    public Users(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "models.Users{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }*/
}
