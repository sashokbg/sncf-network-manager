package fr.sncf.sncfnetworkmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableJpaRepositories()
@EntityScan({"fr.sncf.sncfnetworkmanager.repository"})
public class SncfNetworkManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SncfNetworkManagerApplication.class, args);
	}

}
