package com.garam;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.garam.employee_info.entity.employee_info;
import com.garam.employee_info.entity.employee_infoRepository;
import com.garam.vehicle_info.entity.vehicle_infoRepository;
import com.garam.web.dashboard.mapper.DashboardMapper;
import com.garam.web.dashboard.service.MainService;
import com.garam.web.employee.mapper.EmployeeMapper;

@SpringBootTest
class Garam00ApplicationTests {

	@Autowired
	private employee_infoRepository aaa;
	@Autowired
	private vehicle_infoRepository bbb;

	@Autowired
	private MainService ccc;
	@Autowired
	private DashboardMapper ddd;
	@Autowired
	private EmployeeMapper eee;

	@Test
	void contextLoads() {
	}

	@Test
	void findAll111() {

		// 1. 전체 게시글 수 조회

		// 2. 전체 게시글 리스트 조회
		List<employee_info> list = aaa.findAll();
	}

	@Test
	void findAll222() throws Exception {
//		eee.selectEmpAll();
	}
}
