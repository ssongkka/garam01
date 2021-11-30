package com.garam.web.rsvt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.garam.web.rsvt.dto.CustomerDTO;

@Mapper
public interface CustomerMapper {
	public List<CustomerDTO> selectCustomerAll() throws Exception;

	public List<CustomerDTO> selectCustomerName(CustomerDTO customerDTO) throws Exception;
}
