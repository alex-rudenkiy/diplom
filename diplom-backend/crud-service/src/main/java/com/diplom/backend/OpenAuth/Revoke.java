package com.diplom.backend.OpenAuth;

import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2RefreshToken;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;

/*
public class Revoke {
    @PostMapping("/oauth/logout")
    public ResponseEntity<String> revoke(HttpServletRequest request) {
        try {
            String authorization = request.getHeader("Authorization");
            if (authorization != null && authorization.contains("Bearer")) {
                String tokenValue = authorization.replace("Bearer", "").trim();

                OAuth2AccessToken accessToken = tokenStore.readAccessToken(tokenValue);
                tokenStore.removeAccessToken(accessToken);

                //OAuth2RefreshToken refreshToken = tokenStore.readRefreshToken(tokenValue);
                OAuth2RefreshToken refreshToken = accessToken.getRefreshToken();
                tokenStore.removeRefreshToken(refreshToken);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid access token");
        }

        return ResponseEntity.ok().body("Access token invalidated successfully");
    }

}
*/
