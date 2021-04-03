package com.diplom.backend.database.entity.File.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FileUploadResultDto {
    public String fileFakeName;
    public String description;
}
