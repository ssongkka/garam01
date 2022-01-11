package com.garam.web.employee.service;

import java.util.List;

import com.garam.web.employee.dto.EmployeeInfoDTO;

public interface EmployeeService {
	public int insertEmp(EmployeeInfoDTO employeeInfoDTO) throws Exception;

	public List<EmployeeInfoDTO> selectEmpAll(EmployeeInfoDTO employeeInfoDTO) throws Exception;

	public List<EmployeeInfoDTO> selectEmpName(EmployeeInfoDTO employeeInfoDTO) throws Exception;

	public List<EmployeeInfoDTO> selectEmpDetail(EmployeeInfoDTO employeeInfoDTO) throws Exception;

}
