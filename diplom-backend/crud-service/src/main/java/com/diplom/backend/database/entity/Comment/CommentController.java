package com.diplom.backend.database.entity.Comment;

import com.diplom.backend.database.entity.Comment.Comment;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/comment")
public class CommentController {
    private final CommentRepository repository;

    @Autowired
    public CommentController(CommentRepository repository){ this.repository = repository; }

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody @Valid Comment u) {
        Object result;
        try {
            result = repository.save(u);
        } catch (Exception e){
            throw e;
        }
        System.out.println(result);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Object> read(Comment u) {
        Object result;
        try {
            result = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<Object> updateById(@RequestBody @Valid Comment u) {
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
    public ResponseEntity<Object> deleteAllByParams(Comment u) {
        try {
            repository.findAll(Example.of(u, ExampleMatcher.matchingAny())).forEach(t-> repository.delete(t));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
