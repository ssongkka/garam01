package com.garam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class Garam01Application extends ServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(Garam01Application.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return super.configure(application);
	}

}
