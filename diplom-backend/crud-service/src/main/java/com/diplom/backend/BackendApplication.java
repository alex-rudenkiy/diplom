package com.diplom.backend;

import com.diplom.backend.database.entity.Role.Role;
import com.diplom.backend.database.entity.Role.RoleRepository;
import com.diplom.backend.database.entity.SocialNetwork.SocialNetwork;
import com.diplom.backend.database.entity.SocialNetwork.SocialNetworkRepository;
import com.diplom.backend.database.entity.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
public class BackendApplication {
    final UserRepository userRepository;

    public BackendApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
    }




/*
    @Bean
    public FilterRegistrationBean myFilter() {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        Filter myFilter = new TokenAuthenticationFilter();
        beanFactory.autowireBean(myFilter);
        registration.setFilter(myFilter);
        registration.addUrlPatterns("/myfilterpath/*");
        return registration;
    }
*/

/*
    @Bean
    public FilterRegistrationBean<TokenAuthenticationFilter> loggingFilter(){
        FilterRegistrationBean<TokenAuthenticationFilter> registrationBean
                = new FilterRegistrationBean<>();

        registrationBean.setFilter(new TokenAuthenticationFilter("pog"));
        registrationBean.addUrlPatterns("/security/*");
        return registrationBean;
    }
*/

    @RequestMapping(value = "/checked-out")
    public String checkedOut() {
        return "Spring Boot in Action";
    }

    @RequestMapping(value = "/lol/**")
    public String lolasd() {
        return "Spring Boot in lol";
    }

    @Autowired
    RoleRepository roleRepository;
    @Autowired
    SocialNetworkRepository socialNetworkRepository;

    @PutMapping("/init/bd")
    public void initBD(){
        roleRepository.save(new Role( "Users"));
        roleRepository.save(new Role( "Admin"));
        socialNetworkRepository.save(new SocialNetwork("www.vk.com/%", "VK", "http://localhost/resources/vk.svg", "ВКонтакте", "Ксения Сергеевна"));
        socialNetworkRepository.save(new SocialNetwork("www.ok.ru/%", "Odnoklasniki", "http://localhost:8090/images/socials/okIcon.svg", "Одноклассники", "Мария Зипулина"));
        socialNetworkRepository.save(new SocialNetwork("www.ya.ru/%", "Yandex", "http://localhost/resources/ya.svg", "Яндекс", "test@yandex.ru"));
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}

