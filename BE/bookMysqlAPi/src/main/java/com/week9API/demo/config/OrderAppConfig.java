package com.week9API.demo.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class OrderAppConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

}
