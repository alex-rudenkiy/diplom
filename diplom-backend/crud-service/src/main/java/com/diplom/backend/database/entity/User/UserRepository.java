package com.diplom.backend.database.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Long> {
    List<Users> findUsersByNameEqualsAndSurnameEqualsAndPatronymicEquals(String name, String surname, String patronymic);
    List<Users> findUsersByNameEqualsAndSurnameEqualsAndPatronymicEqualsOrMobilenumberEquals(String name, String surname, String patronymic, String mobilenumber);

    List<Users> getUsersByNameEqualsAndSurnameEqualsAndPatronymicEquals(String name, String surname, String patronymic);
    List<Users> getUsersByNameEqualsAndSurnameEqualsAndPatronymicEqualsAndMobilenumberEquals(String name, String surname, String patronymic, String mobilenumber);

    Users getUserByLoginEqualsAndPasswordHashEquals(String login, String passwordHash);
    Users getUserByMobilenumberEqualsAndPasswordHashEquals(String mobilenumber, String passwordHash);

}
