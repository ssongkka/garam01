package com.garam.web.rsvt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/rsvt")
public class RsvtController {

	@GetMapping
	public String rsvt() throws Exception {
		return "rsvt/rsvtMain";
	}

}
