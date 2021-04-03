package com.diplom.backend.database.entity.Appeal;

import com.diplom.backend.database.entity.Appeal.Appeal;
import com.diplom.backend.database.entity.AppealEvent.AppealEvent;
import com.diplom.backend.database.entity.Token.GetTokenService;
import com.diplom.backend.database.entity.User.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/appeal")
public class AppealController {
    @Autowired
    private AppealRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GetTokenService getTokenService;

    @Autowired
    public AppealController(AppealRepository repository){ this.repository = repository; }

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody @Valid AppealPostDto u) {
        Object result;
        try {
            ObjectMapper objectMapper = new ObjectMapper();

            Map<String, Object> t = (Map<String, Object>) getTokenService.getTokenPayload(u.getOwnerToken());

            Appeal a = new Appeal();
            a.setOwnerId(userRepository.getOne(Long.valueOf((Integer)t.get("clientId"))));
            a.setTitle(u.getTitle());
            a.setAppealEvents(new HashSet<AppealEvent>());
            a.setAttachments(new HashSet<>());
            a.setComments(new HashSet<>());
            a.setConfirmed(false);
            a.setEnabled(true);
            a.setDescription(u.getDescription());
            a.setViews(new HashSet<>());
            a.setStatus("start");
            a.setCategory(u.getCategory());

            a.setTitle("");
            a.setDescription("");
            a.setCategory("");
            result = repository.save(a);
        } catch (Exception e){
            throw e;
        }
        System.out.println(result);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Object> read(Appeal u) {
        Object result;
        try {
            result = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<Object> updateById(@RequestBody @Valid Appeal u) {
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
    public ResponseEntity<Object> deleteAllByParams(Appeal u) {
        try {
            repository.findAll(Example.of(u, ExampleMatcher.matchingAny())).forEach(t-> repository.delete(t));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
