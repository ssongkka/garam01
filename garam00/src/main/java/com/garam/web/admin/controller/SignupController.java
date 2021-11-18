package com.garam.web.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.garam.web.admin.dto.UserSaveRequestDto;
import com.garam.web.admin.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@RequestMapping(value = "/admin")
public class SignupController {

	private final UserService userService;

	@GetMapping("/signup")
	public String signup() {
		return "admin/signup";
	}

	@PostMapping("/signup")
	public String signup(UserSaveRequestDto userSaveDto) {
		userService.save(userSaveDto);
		return "redirect:/";
	}
}
