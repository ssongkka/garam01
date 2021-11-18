package com.garam.web.admin.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(of = "id")
@Entity
public class User {

	@Id
	@GeneratedValue
	private String id;

	private String pw;

	private String company;

	private String position;

	private String name;

	private String phone;

	@Enumerated(EnumType.ORDINAL)
	private PowerRole power;

	private LocalDateTime inserday;

	private LocalDateTime outday;
}