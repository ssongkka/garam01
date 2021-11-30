package com.garam.web.rsvt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.garam.web.rsvt.dto.CustomerDTO;
import com.garam.web.rsvt.mapper.CustomerMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

	private final CustomerMapper customerMapper;

	@Override
	public List<CustomerDTO> selectCustomerAll() throws Exception {
		List<CustomerDTO> list = customerMapper.selectCustomerAll();
		return list;
	}

	@Override
	public List<CustomerDTO> selectCustomerName(CustomerDTO customerDTO) throws Exception {
		List<CustomerDTO> list = customerMapper.selectCustomerName(customerDTO);
		return list;
	}

}
