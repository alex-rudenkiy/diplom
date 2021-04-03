package com.diplom.backend.database.entity.File;

import com.diplom.backend.database.entity.Comment.Comment;
import com.diplom.backend.database.entity.File.Dto.FileUploadResultDto;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.File;
import java.util.UUID;

@RestController
@RequestMapping("/file")
public class FileController {
    private final FileRepository repository;

    @Autowired
    public FileController(FileRepository repository){ this.repository = repository; }

    @PostMapping()
    public ResponseEntity<Object> post(@RequestParam("file") MultipartFile file, @RequestParam("fileType") String fileType, ModelMap modelMap) {
        modelMap.addAttribute("file", file);
        String name = file.getOriginalFilename();
        String fakeName = UUID.randomUUID().toString()+".bin";

        if (!file.isEmpty()) {
            try {


                byte[] bytes = file.getBytes();
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File(fakeName)));
                stream.write(bytes);
                stream.close();

                if(fileType.equals("avatar")){
                    FileEntity f = new FileEntity(file.getOriginalFilename(), fakeName, true);
                    repository.save(f);
                }

                //return "Вы удачно загрузили " + name + " в " + name + "!";
                return new ResponseEntity<>(new FileUploadResultDto(fakeName,""), HttpStatus.OK);
            } catch (Exception e) {

                new File(fakeName).delete();
                System.out.println(e);
                //return "Вам не удалось загрузить " + name + " => " + e.getMessage();
            }
        } else {
            //return "Вам не удалось загрузить " + name + " потому что файл пустой.";
        }
        return new ResponseEntity<>(new FileUploadResultDto(null,""), HttpStatus.CONFLICT);

    }


/*
    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody @Valid FileEntity u) {
        Object result;
        try {
            result = repository.save(u);
        } catch (Exception e){
            throw e;
        }
        System.out.println(result);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }
*/

    @GetMapping()
    public ResponseEntity<Object> read(FileEntity u) {
        Object result;
        try {
            result = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<Object> updateById(@RequestBody @Valid FileEntity u) {
        Object result;
        try {
            result = repository.save(u);
        } catch (Exception e){
            throw e;
        }
        System.out.println(result);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<Object> deleteAllByParams(FileEntity u) {
        try {
            repository.findAll(Example.of(u, ExampleMatcher.matchingAny())).forEach(t-> repository.delete(t));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
