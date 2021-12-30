package com.garam.web.rsvt.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

		if (rsvtDTO.getRsvt() == null || rsvtDTO.getRsvt().equals("")) {
			System.out.println(rsvtDTO);
			rsvtDTO.setRsvt(get_Rsvt(rsvtDTO.getCtmno(), rsvtDTO.getStday().toString()));

			rtn = rsvtMapper.insertRsvt(rsvtDTO);
		} else {
		}
		return rtn;
	}

	private String get_Rsvt(String ctmno, String stday) {
		String rsvt = "R-" + ctmno + "-" + stday.substring(2).replace("-", "") + "-"
				+ LocalDateTime.now().toString().substring(2, 22).replace("-", "").replace(":", "").replace(".", "-");

		return rsvt;
	}

	@Override
	public List<RsvtDTO> selectAlloCTM(RsvtDTO rsvtDTO) throws Exception {

		List<RsvtDTO> list = rsvtMapper.selectAlloCTM(rsvtDTO);

		return list;
	}

	@Override
	public List<RsvtDTO> selectAlloRSVT(RsvtDTO rsvtDTO) throws Exception {
		List<RsvtDTO> list = rsvtMapper.selectAlloRSVT(rsvtDTO);

		return list;
	}

	@Override
	public List<RsvtDTO> selectAlloOPER(RsvtDTO rsvtDTO) throws Exception {

		List<RsvtDTO> list = rsvtMapper.selectAlloOPER(rsvtDTO);

		return list;
	}

	@Override
	public int insertManyRsvt(List<Map<String, Object>> map) throws Exception {
		HashMap<String, Object> rsvt = new HashMap<>();
		for (int i = 0; i < map.size(); i++) {
			rsvt.put("rsvt", map);
		}

		int rtn = rsvtMapper.insertManyRsvt(rsvt);

		return rtn;
	}
}
