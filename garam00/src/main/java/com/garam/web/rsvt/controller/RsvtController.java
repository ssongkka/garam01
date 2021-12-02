package com.garam.web.rsvt.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.garam.web.login.entity.User;
import com.garam.web.rsvt.dto.CustomerDTO;
import com.garam.web.rsvt.service.CustomerService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/rsvt")
public class RsvtController {

	private final CustomerService customerService;

	@GetMapping
	public String rsvt(@AuthenticationPrincipal User user, Model model) throws Exception {

		List<CustomerDTO> list = customerService.selectCustomerAll();
		model.addAttribute("customer", list);

		model.addAttribute("user", user);

		return "rsvt/rsvtMain";
	}
}