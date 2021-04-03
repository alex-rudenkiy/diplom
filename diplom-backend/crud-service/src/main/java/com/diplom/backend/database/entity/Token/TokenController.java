package com.diplom.backend.database.entity.Token;

import com.diplom.backend.database.entity.Token.Dto.CheckTokenDto;
import com.diplom.backend.database.entity.User.Users;
import com.diplom.backend.database.entity.User.UserRepository;
import com.google.gson.Gson;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/token")
public class TokenController {

    @Autowired
    GetTokenService getTokenService;

    @Autowired
    UserRepository userRepository;


/*    @PostMapping()
    public ResponseEntity<Object> getToken(@RequestBody @Valid getTokenDto u) throws Exception {
        Object result;
try {
            result = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }

        result = getTokenService.checkToken("alex","qwerty");
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }*/


    @PostMapping()
    public ResponseEntity<Object> getToken(@RequestBody @Valid GetTokenService.getTokenDto u) throws Exception {
        String result;
        Users t=null;
        try {
            t = userRepository.getUserByLoginEqualsAndPasswordHashEquals(u.getLoginOrMobile(), DigestUtils.md5Hex(u.getPassword()).toUpperCase());
            if(t==null) {
                t = userRepository.getUserByMobilenumberEqualsAndPasswordHashEquals(u.getLoginOrMobile(), DigestUtils.md5Hex(u.getPassword()).toUpperCase());
            }

            if(t==null){
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "You entered incorrect authorization data!");
            }
        } catch (Exception e){
            throw e;
        }

        result = getTokenService.getToken(t.getId(), u.remember);
        if(t.getEnabled() && t.getMobilenumber() != null && t.getMobilenumber().length() > 0) {
            return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK); //Всё отлично
        } else if(t.getEnabled() && t.getMobilenumber() != null && t.getMobilenumber().length() == 0) {
            return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.FAILED_DEPENDENCY); //Необходимо добавить мобильный номер
        }else{
            return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.LOCKED); //Пользователь заблокирован
        }

    }

    @GetMapping()
    public ResponseEntity<Object> checkToken(CheckTokenDto u) throws Exception {
        Object result;
        /*try {
            result = repository.findAll(Example.of(u, ExampleMatcher.matchingAny()));
        } catch (Exception e){
            throw e;
        }*/
        result = getTokenService.getToken(u.getUserId(), false);
        return new ResponseEntity<>(new Gson().toJson(result), HttpStatus.OK);
    }


}
