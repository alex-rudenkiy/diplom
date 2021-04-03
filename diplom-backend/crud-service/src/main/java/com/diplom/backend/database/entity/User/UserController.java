package com.diplom.backend.database.entity.User;

import com.diplom.backend.database.entity.Role.RoleRepository;
import com.diplom.backend.database.entity.SocialLink.SocialLink;
import com.diplom.backend.database.entity.SocialLink.SocialLinkRepository;
import com.diplom.backend.database.entity.SocialNetwork.SocialNetworkRepository;
import com.diplom.backend.database.entity.Token.GetTokenService;
import com.diplom.backend.database.entity.User.Dto.SocialLinkDto;
import com.diplom.backend.database.entity.User.Dto.UserPostDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository repository;
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private GetTokenService getTokenService;

    @Autowired
    private SocialNetworkRepository socialNetworkRepository;

    @Autowired
    private SocialLinkRepository socialLinkRepository;

    @Autowired
    public UserController(UserRepository repository){ this.repository = repository; }

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody @Valid @Validated UserPostDto d) throws Throwable, SQLException {
        Object result;
        d.setRole(roleRepository.getOne(1L));
        //d.setEnabled(true);
        d.setConfirmed(false);
        d.setPasswordHash(DigestUtils.md5Hex(d.getPasswordHash()).toUpperCase());
//        List<Users> tmp = repository.getUsersByNameEqualsAndSurnameEqualsAndPatronymicEqualsAndMobilenumberEquals(d.getName(), d.getSurname(), d.getPatronymic());
        try {
            System.out.println(d.getName()+d.getSurname()+d.getPatronymic()+d.getMobilenumber());
            List<Users> l = repository.findUsersByNameEqualsAndSurnameEqualsAndPatronymicEquals(d.getName(), d.getSurname(), d.getPatronymic());
            if(!d.getTemporal() && !repository.findUsersByNameEqualsAndSurnameEqualsAndPatronymicEqualsOrMobilenumberEquals(d.getName(), d.getSurname(), d.getPatronymic(), d.getMobilenumber()).isEmpty()){
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A user with this first name, last name and patronymic already exists in the database!");
            }

            Users u = new Users();
            u.setPasswordHash(d.getPasswordHash());
            u.setConfirmed(d.getConfirmed());
            u.setRole(d.getRole());
            u.setSurname(d.getSurname());
            u.setPatronymic(d.getPatronymic());
            u.setEnabled(d.getEnabled());
            u.setMobilenumber(d.getMobilenumber());
            u.setEnabled(d.getEnabled());
            u.setLogin(d.getLogin());
            u.setName(d.getName());
            u.setAvatarFileFakeUrl(d.getAvatarFileFakeUrl());
            u.setTemporal(d.getTemporal());

            for(SocialLinkDto s: d.getSocialLink() ){
               System.out.println(s.getSocialType());
                System.out.println(socialNetworkRepository.findById((long) s.getSocialType()));
                u.getSocialLink().add(new SocialLink(socialNetworkRepository.findById((long) s.getSocialType()).get(), s.getPayload()));
            }

            repository.save(u);

            result = getTokenService.getToken(u.getId(), false);
        } catch (Exception e){
            throw e;
        }
        System.out.println(result);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Object> read(Users u, @RequestParam(value = "token", required=false) String token) throws JsonProcessingException { //@RequestBody Example<Users> u
        if(token != null && token.length()>0){
            Users result;

            try {
                Object o = getTokenService.getTokenPayload(token);
                ObjectMapper oMapper = new ObjectMapper();
                Map<String, Object> map = oMapper.convertValue(o, Map.class);
                Integer id = (Integer) map.get("clientId");
                result = repository.getOne(Long.valueOf(id));

                if(result.getEnabled() && result.getMobilenumber() != null && result.getMobilenumber().length() > 0) {
                    return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK); //Всё отлично
                } else if(result.getEnabled() && result.getMobilenumber() != null && result.getMobilenumber().length() == 0) {
                    return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.FAILED_DEPENDENCY); //Необходимо добавить мобильный номер
                }else{
                    return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.LOCKED); //Пользователь заблокирован
                }
            } catch (Exception e){
                throw e;
            }
           // return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);

        }

        List<Users> t;
        try {
            t = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }

        List<Users> result = new ArrayList<>();
        for (Users users : t){
            result.add(users);
        }

        try {
            return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(new Gson().toJson(e), HttpStatus.OK);

        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> read(@PathVariable Long id) { //@RequestBody Example<Users> u
        Object result;
        try {
            result = repository.getOne(id);
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }

/*    @GetMapping("")
    public ResponseEntity<Object> read(@RequestParam("token") String token) { //@RequestBody Example<Users> u
        Object result;
        try {
            CheckTokenDto p = getTokenService.getTokenPayload(token);
            result = repository.getOne(p.getUserId());
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }*/

    @PutMapping()
    public ResponseEntity<Object> updateById(@RequestBody @Valid Users u) {
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
    public ResponseEntity<Object> deleteAllByParams(Users u) { //@RequestBody Example<Users> u
        try {
            repository.findAll(Example.of(u, ExampleMatcher.matchingAny())).forEach(t-> repository.delete(t));
        } catch (Exception e){
            throw e;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
