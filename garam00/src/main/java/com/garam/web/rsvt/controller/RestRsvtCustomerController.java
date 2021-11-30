package com.garam.web.rsvt.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.garam.web.rsvt.dto.CustomerDTO;
import com.garam.web.rsvt.service.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/customer")
@RequiredArgsConstructor
public class RestRsvtCustomerController {

	private final CustomerService customerService;

	@PostMapping(value = "/name")
	public List<CustomerDTO> customerName(@RequestBody CustomerDTO customerDTO) throws Exception {

		List<CustomerDTO> list = customerService.selectCustomerName(customerDTO);

		return list;
	}
}
