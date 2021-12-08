package com.garam.web.rsvt.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.garam.web.rsvt.dto.RsvtDTO;
import com.garam.web.rsvt.service.RsvtService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/customer")
@RequiredArgsConstructor
public class RestRsvtCustomerController {

	private final RsvtService rsvtService;

	@PostMapping(value = "/name")
	public List<RsvtDTO> customerName(@RequestBody RsvtDTO rsvtDTO) throws Exception {

		List<RsvtDTO> list = rsvtService.selectCustomerName(rsvtDTO);

		return list;
	}
}
