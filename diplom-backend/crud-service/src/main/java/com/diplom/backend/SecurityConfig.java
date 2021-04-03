package com.diplom.backend;

import com.diplom.backend.OpenAuth.TokenAuthenticationOAuthFilter;
import com.diplom.backend.database.entity.Token.TokenAuthenticationFilter;
import com.diplom.backend.database.entity.Token.TokenAuthenticationManager;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.oauth2.client.OAuth2LoginConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.client.web.HttpSessionOAuth2AuthorizationRequestRepository;
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.*;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;


@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    TokenAuthenticationManager tokenAuthenticationManager;

/*
    @Bean
    public AuthorizationRequestRepository<OAuth2AuthorizationRequest>
    authorizationRequestRepository() {
        return new HttpSessionOAuth2AuthorizationRequestRepository();
    }

    public class MySimpleUrlAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

        protected Log logger = LogFactory.getLog(this.getClass());

        private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

        @Override
        public void onAuthenticationSuccess(HttpServletRequest request,
                                            HttpServletResponse response, Authentication authentication)
                throws IOException {

            System.out.println(authentication);

//            handle(request, response, authentication);
//            clearAuthenticationAttributes(request);

        }
    }

*/



/*
    @Autowired
    private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;


    @Bean
    public HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
        return new HttpCookieOAuth2AuthorizationRequestRepository();
    }
*/





/*    @Bean
    SimpleUrlAuthenticationSuccessHandler successHandler() {
        return new SimpleUrlAuthenticationSuccessHandler("/successUrl");
    }

    @Bean
    SimpleUrlAuthenticationFailureHandler failureHandler() {
        return new SimpleUrlAuthenticationFailureHandler("/failureUrl");
    }*/
@Configuration
public class SocialConfig {

    @Bean
    @RequestScope
    public Object facebook(OAuth2AuthorizedClientService clientService) {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        String accessToken = null;
        if (authentication.getClass()
                .isAssignableFrom(OAuth2AuthenticationToken.class)) {
            OAuth2AuthenticationToken oauthToken =
                    (OAuth2AuthenticationToken) authentication;
            String clientRegistrationId =
                    oauthToken.getAuthorizedClientRegistrationId();
            if (clientRegistrationId.equals("facebook")) {
                OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
                        clientRegistrationId, oauthToken.getName());
                accessToken = client.getAccessToken().getTokenValue();
            }
        }
        return null;
    }

}
    @Override
    protected void configure(HttpSecurity http) throws Exception {



        TokenAuthenticationFilter taf = new TokenAuthenticationFilter("/lol/**");
        ClientRegistrationRepository clientRegistrationRepository = new ClientRegistrationRepository() {
            @Override
            public ClientRegistration findByRegistrationId(String s) {
                return null;
            }
        };

        OAuth2AuthorizedClientRepository authorizedClientRepository = new OAuth2AuthorizedClientRepository() {
            @Override
            public <T extends OAuth2AuthorizedClient> T loadAuthorizedClient(String s, Authentication authentication, HttpServletRequest httpServletRequest) {
                return null;
            }

            @Override
            public void saveAuthorizedClient(OAuth2AuthorizedClient oAuth2AuthorizedClient, Authentication authentication, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

            }

            @Override
            public void removeAuthorizedClient(String s, Authentication authentication, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

            }
        };


       TokenAuthenticationOAuthFilter tao = new TokenAuthenticationOAuthFilter(clientRegistrationRepository, authorizedClientRepository, "/lol/**");




        http.csrf().disable().addFilterAfter(taf, UsernamePasswordAuthenticationFilter.class). //addFilterAfter(tao, TokenAuthenticationOAuthFilter.class).
            oauth2Login().
                successHandler((httpServletRequest, httpServletResponse, authentication) -> {
                    //System.out.println(authentication);
                    if(authentication.isAuthenticated()){
                        //System.out.println(authentication.getPrincipal());
                        ObjectMapper oMapper = new ObjectMapper();
                        Map<String, Object> map = oMapper.convertValue(authentication.getPrincipal(), Map.class);
                        System.out.println(map.get("name")); //типа id
                        System.out.println(map.get("fullName"));
                        System.out.println(map.get("email"));
                        System.out.println(map.get("givenName"));
                        System.out.println(map.get("familyName"));
                        System.out.println(map.get("picture"));
                        //httpServletRequest.getRequestDispatcher("http://localhost:19468/profile").forward(httpServletRequest, httpServletResponse);
                        httpServletResponse.sendRedirect("http://localhost:3000/profile");
                    }
                });
                //failureHandler(failureHandler());

/*
        http
                .csrf()
                .disable().antMatcher("/**").authorizeRequests()
                .antMatchers("/", "/index.html").authenticated()
                .antMatchers("/home").permitAll()
                .anyRequest().authenticated()
                .and()
                .oauth2Login().permitAll()
                .and().
                logout().logoutSuccessUrl("/");
*/


/*
        taf.setAuthenticationManager(tokenAuthenticationManager);
        http.csrf().disable().addFilterAfter(taf, UsernamePasswordAuthenticationFilter.class);

        http.headers().frameOptions().sameOrigin()
                .and()
                .addFilterAfter(taf, UsernamePasswordAuthenticationFilter.class);
*/


    }


}

/*
@Configuration
class CrossOriginConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS");
            }
        };
    }

}
*/
