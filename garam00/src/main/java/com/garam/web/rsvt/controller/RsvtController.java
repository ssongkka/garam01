package com.garam.web.rsvt.controller;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.garam.web.login.entity.User;
import com.garam.web.rsvt.dto.RsvtDTO;
import com.garam.web.rsvt.service.RsvtService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/rsvt")
public class RsvtController {

	private final RsvtService rsvtService;

	@GetMapping
	public String rsvt(@AuthenticationPrincipal User user, Model model) throws Exception {

		List<RsvtDTO> list = rsvtService.selectCustomerAll();
		model.addAttribute("customer", list);

		model.addAttribute("user", user);

		return "rsvt/rsvtMain";
	}

	@PostMapping(value = "/rsvtregister")
	public String rsvt_Insert(@ModelAttribute("params") final RsvtDTO rsvtDTO) throws Exception {

		try {
			int a = rsvtService.insertRsvt(rsvtDTO);
			if (a < 1) {
			}
		} catch (DataAccessException e) {
			return null;

		} catch (Exception e) {
			return null;
		}

		return null;
	}
}