package com.garam.web.rsvt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.garam.web.rsvt.dto.RsvtDTO;

@Mapper
public interface RsvtMapper {
	public List<RsvtDTO> selectCustomerAll() throws Exception;

	public List<RsvtDTO> selectCustomerName(RsvtDTO rsvtDTO) throws Exception;

	public int insertRsvt(RsvtDTO rsvtDTO) throws Exception;
}
