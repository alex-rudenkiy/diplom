package com.diplom.backend.database.entity.User.Dto;

import com.diplom.backend.database.entity.SocialNetwork.SocialNetwork;
import lombok.Data;

import javax.persistence.*;

@Data
public class SocialLinkDto {
    private int socialType;
    private String payload;
}
