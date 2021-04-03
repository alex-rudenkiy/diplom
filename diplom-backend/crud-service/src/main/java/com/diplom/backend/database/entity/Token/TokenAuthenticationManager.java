package com.diplom.backend.database.entity.Token;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;
import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class TokenAuthenticationManager implements AuthenticationManager {

    @Autowired
    GetTokenService getTokenService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        try {
            if (authentication instanceof TokenAuthentication) {
                TokenAuthentication readyTokenAuthentication = processAuthentication((TokenAuthentication) authentication);
                //TokenAuthentication readyTokenAuthentication = new TokenAuthentication("fuck");
                return readyTokenAuthentication;
            } else {
                authentication.setAuthenticated(false);
                return authentication;
            }
        } catch (Exception ex) {
            if(ex instanceof AuthenticationServiceException)
                throw ex;
        }
        return null;
    }

    private TokenAuthentication processAuthentication(TokenAuthentication authentication) throws AuthenticationException {
        String token = authentication.getToken();
        //DefaultClaims claims;
        try {
            //claims = (DefaultClaims) Jwts.parser().setSigningKey(key).parse(token).getBody();
            Object tmp = getTokenService.getTokenPayload(token);
            System.out.println(tmp);

        } catch (Exception ex) {
            throw ex;//new AuthenticationServiceException("Token corrupted");
        }
        return new TokenAuthentication("user");
/*
        if (claims.get("TOKEN_EXPIRATION_DATE", Long.class) == null)
            throw new AuthenticationServiceException("Invalid token");
        Date expiredDate = new Date(claims.get("TOKEN_EXPIRATION_DATE", Long.class));
        if (expiredDate.after(new Date()))
            return buildFullTokenAuthentication(authentication, claims);
        else
            throw new AuthenticationServiceException("Token expired date error");
*/
    }

/*    private TokenAuthentication buildFullTokenAuthentication(TokenAuthentication authentication, DefaultClaims claims) {
        Users user = (Users) userDetailsService.loadUserByUsername(claims.get("USERNAME", String.class));
        if (user.isEnabled()) {
            Collection<GrantedAutority> authorities = user.getAuthorities();
            TokenAuthentication fullTokenAuthentication =
                    new TokenAuthentication(authentication.getToken(), authorities, true, user);
            return fullTokenAuthentication;
        } else {
            throw new AuthenticationServiceException("Users disabled");;
        }
    }*/
}
