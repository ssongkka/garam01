package com.garam.web.rsvt.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.garam.web.rsvt.dto.RsvtDTO;
import com.garam.web.rsvt.mapper.RsvtMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RsvtServiceImpl implements RsvtService {

	private final RsvtMapper rsvtMapper;

	@Override
	public List<RsvtDTO> selectCustomerAll() throws Exception {
		List<RsvtDTO> list = rsvtMapper.selectCustomerAll();
		return list;
	}

	@Override
	public List<RsvtDTO> selectCustomerName(RsvtDTO rsvtDTO) throws Exception {
		List<RsvtDTO> list = rsvtMapper.selectCustomerName(rsvtDTO);
		return list;
	}

	@Override
	public int insertRsvt(RsvtDTO rsvtDTO) throws Exception {

		int rtn = 0;
		System.out.println("asgdsdgdg");
		System.out.println(rsvtDTO.getRsvt());

		if (rsvtDTO.getRsvt() == null || rsvtDTO.getRsvt().equals("")) {
			System.out.println(rsvtDTO);
			rsvtDTO.setRsvt(get_Rsvt(Integer.toString(rsvtDTO.getCtmseq()), rsvtDTO.getBus(),
					Integer.toString(rsvtDTO.getNum()), rsvtDTO.getStday().toString()));

			rtn = rsvtMapper.insertRsvt(rsvtDTO);
		} else {
		}
		return rtn;
	}

	private String get_Rsvt(String ctmseq, String bus, String num, String stday) {
		String rsvt = ctmseq + "-" + stday.substring(2).replace("-", "") + "-"
				+ LocalDateTime.now().toString().substring(2).replace("-", "").replace(":", "");

		return rsvt;
	}
}
