package com.garam.web.rsvt.service;

import java.util.List;
import java.util.Map;

import com.garam.web.rsvt.dto.RsvtDTO;

public interface RsvtService {
	public List<RsvtDTO> selectCustomerAll() throws Exception;

	public List<RsvtDTO> selectCustomerName(RsvtDTO rsvtDTO) throws Exception;

	public int insertRsvt(RsvtDTO rsvtDTO) throws Exception;

	public int insertManyRsvt(List<Map<String, Object>> map) throws Exception;

	public List<RsvtDTO> selectAlloCTM(RsvtDTO rsvtDTO) throws Exception;

	public List<RsvtDTO> selectAlloRSVT(RsvtDTO rsvtDTO) throws Exception;

	public List<RsvtDTO> selectAlloOPER(RsvtDTO rsvtDTO) throws Exception;
}
