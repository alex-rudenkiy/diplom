package com.diplom.backend.database.entity.Token;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TokenAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
    public TokenAuthenticationFilter(String defaultFilterProcessesUrl) {
        super(defaultFilterProcessesUrl);
        setAuthenticationFailureHandler((request, response, authenticationException) -> {
            response.getOutputStream().print(authenticationException.getMessage());
        });

        setAuthenticationSuccessHandler((request, response, authentication) ->
        {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println(request.getServletPath());// + request.getPathInfo());
            request.getRequestDispatcher(request.getServletPath()).forward(request, response);
        });

    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {
/*

            String token = httpServletRequest.getHeader("token");
            if (token == null)
                token = httpServletRequest.getParameter("token");
            if (token == null) {
                TokenAuthentication authentication = new TokenAuthentication("qwerty");
                authentication.setAuthenticated(false);
                return authentication;//authentication;
            }
            TokenAuthentication tokenAuthentication = new TokenAuthentication(token);
            Authentication authentication = getAuthenticationManager().authenticate(tokenAuthentication);
            return authentication;
*/
        return null;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain) throws IOException, ServletException {
        super.doFilter(req, res, chain);
    }
}

