package com.diplom.backend.database.entity.Role;

import com.diplom.backend.database.entity.SocialLink.SocialLink;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/role")
public class RoleController {
    private final RoleRepository repository;

    @Autowired
    public RoleController(RoleRepository repository){ this.repository = repository; }

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody @Valid Role u) {
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
    public ResponseEntity<Object> read(Role r) {
        Object result;
        try {
            result = repository.findAll(Example.of(r));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<Object> updateById(@RequestBody @Valid Role u) {
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
    public ResponseEntity<Object> deleteAllByParams(Role u) {
        try {
            repository.findAll(Example.of(u, ExampleMatcher.matchingAny())).forEach(t-> repository.delete(t));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
