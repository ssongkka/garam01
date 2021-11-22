package com.garam.web.dashboard.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.garam.company.dto.CompanyResponseDto;
import com.garam.company.service.CompanyService;
import com.garam.web.login.entity.User;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/dashboard")
public class DashboardController {

	private final CompanyService companyService;

	@GetMapping
	public String dashboard(@AuthenticationPrincipal User user, Model model) throws Exception {

		List<CompanyResponseDto> companyList = companyService.findall();

		int ch = 0;
		if (companyList.size() > 1) {
			for (int i = 0; i < companyList.size(); i++) {
				if (companyList.get(i).getCompany().equals(user.getCompany())) {
					ch = i;
				}
			}
		}

		System.out.println("몇이냐   " + ch);
		System.out.println("회사1   " + user.getCompany());
		System.out.println("회사2   " + companyList.get(ch).getCompany());

		model.addAttribute("company", companyList.get(ch));
		model.addAttribute("user", user);
		return "dashboard/test";
	}
}
