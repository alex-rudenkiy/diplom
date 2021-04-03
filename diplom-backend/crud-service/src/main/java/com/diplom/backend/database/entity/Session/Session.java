package com.diplom.backend.database.entity.Session;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

public class Session {
    @RedisHash("employee")
    public class Person {

        @Id
        private String id;
        private String token;
        private String lastName;

        // конструктор, геттеры и сеттеры
    }

}
