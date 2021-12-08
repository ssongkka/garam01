package com.garam.web.rsvt.service;

import java.util.List;

import com.garam.web.rsvt.dto.RsvtDTO;

public interface RsvtService {
	public List<RsvtDTO> selectCustomerAll() throws Exception;

	public List<RsvtDTO> selectCustomerName(RsvtDTO rsvtDTO) throws Exception;

	public int insertRsvt(RsvtDTO rsvtDTO) throws Exception;
}
