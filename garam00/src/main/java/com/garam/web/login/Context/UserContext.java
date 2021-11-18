package com.garam.web.login.Context;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.garam.web.admin.entity.PowerRole;

import lombok.Getter;

@SuppressWarnings("serial")
@Getter
public class UserContext extends User {

	private final com.garam.web.admin.entity.User user;

	public UserContext(com.garam.web.admin.entity.User user) {
		super(user.getId(), user.getPw(), getAuthorities(user.getPower()));
		this.user = user;
	}

	private static Collection<? extends GrantedAuthority> getAuthorities(PowerRole role) {
		return Collections.singleton(new SimpleGrantedAuthority(Integer.toString(role.getKey())));
	}
}
