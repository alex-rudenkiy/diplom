package com.diplom.backend.database.entity.Token;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class GetTokenService {

    String key = "QWERTQWERTQWERTQQWERTQWERTQWERTQWERTQQWERTQWERTQWERTQWERTYQWERTYYYQWERTYYWERTYQWERTYYYQWERTYYQWERTQWERTQWERTYQWERTYYYQWERTYYWERTYQWERTYYYQWERTYY";

    private UserDetailsService userDetailsService;



    public Object getTokenPayload(String token) {
        return Jwts.parser().setSigningKey(key).parse(token).getBody();
    }

    public String getToken(Long id, Boolean remember) throws Exception {

        if (id == null)
            return null;
        //Users user = (Users) userDetailsService.loadUserByUsername(username);
        Map<String, Object> tokenData = new HashMap<>();
//        if (password.equals(user.getPassword())) {
        if(true){
            tokenData.put("clientId", id);
            //tokenData.put("userID", user.getUserId().toString());
            //tokenData.put("username", authorizedUser.getUsername());
            tokenData.put("token_create_date", new Date().getTime());
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.HOUR, remember?1000:1);
            tokenData.put("token_expiration_date", calendar.getTime());
            JwtBuilder jwtBuilder = Jwts.builder();
            jwtBuilder.setExpiration(calendar.getTime());
            jwtBuilder.setClaims(tokenData);
            String token = jwtBuilder.signWith(SignatureAlgorithm.HS512, key).compact();
            return token;
        } else {
            throw new Exception("Authentication error");
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class getTokenDto {
        String loginOrMobile;
        String password;
        Boolean remember;
    }
}

