package com.garam.web.admin.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PowerRole {
	USER(3, "승무원"), MANAGER(1, "직원"), ADMIN(0, "관리자");

	private final int key;
	private final String title;
}
