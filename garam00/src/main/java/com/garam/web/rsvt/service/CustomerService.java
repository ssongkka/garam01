package com.garam.web.rsvt.service;

import java.util.List;

import com.garam.web.rsvt.dto.CustomerDTO;

public interface CustomerService {
	public List<CustomerDTO> selectCustomerAll() throws Exception;

	public List<CustomerDTO> selectCustomerName(CustomerDTO customerDTO) throws Exception;
}
