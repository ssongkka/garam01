package com.garam.web.employee.service;

import java.io.BufferedInputStream;
import java.sql.Blob;
import java.time.LocalDate;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;

import com.garam.web.employee.dto.EmployeeInfoDTO;
import com.garam.web.employee.mapper.EmployeeMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

	private final EmployeeMapper employeeMapper;

	@Override
	public int insertEmp(EmployeeInfoDTO employeeInfoDTO) throws Exception {

//		if (employeeInfoDTO.getImg() != null || !employeeInfoDTO.getImg().equals("")) {
//			byte[] imgArr = null;
//
//			String img = employeeInfoDTO.getImg().split("base64")[1].substring(1);
//
//			imgArr = Base64.getDecoder().decode(img);
//			employeeInfoDTO.setImgInOut(imgArr);
//		} else {
//			employeeInfoDTO.setImgInOut(null);
//		}
//
//		employeeInfoDTO.setId(get_Empno());
//
////		if (employeeInfoDTO.getCompany().equals("")) {
////			employeeInfoDTO.setCompany(null);
////		}
////		if (employeeInfoDTO.getKind().equals("")) {
////			employeeInfoDTO.setKind(null);
////		}
//		if (employeeInfoDTO.getEndd().equals("")) {
//			employeeInfoDTO.setEndd(null);
//		}
////		if (employeeInfoDTO.getPhone2().equals("")) {
////			employeeInfoDTO.setPhone2(null);
////		}
////		if (employeeInfoDTO.getAddress().equals("")) {
////			employeeInfoDTO.setAddress(null);
////		}
////		if (employeeInfoDTO.getGarage().equals("")) {
////			employeeInfoDTO.setGarage(null);
////		}
//		if (employeeInfoDTO.getBosum().equals("")) {
//			employeeInfoDTO.setBosum(null);
//		}
////		if (employeeInfoDTO.getBobuj().equals("")) {
////			employeeInfoDTO.setBobuj(null);
////		}
////		if (employeeInfoDTO.getDrvl().equals("")) {
////			employeeInfoDTO.setDrvl(null);
////		}
////		if (employeeInfoDTO.getBusl().equals("")) {
////			employeeInfoDTO.setBusl(null);
////		}
////		if (employeeInfoDTO.getMemo().equals("")) {
////			employeeInfoDTO.setMemo(null);
////		}
////		if (employeeInfoDTO.getBank().equals("")) {
////			employeeInfoDTO.setBank(null);
////		}
////		if (employeeInfoDTO.getGye().equals("")) {
////			employeeInfoDTO.setGye(null);
////		}
////		if (employeeInfoDTO.getGyename().equals("")) {
////			employeeInfoDTO.setGyename(null);
////		}
////		if (employeeInfoDTO.getBasem() == 0) {
////			employeeInfoDTO.setBasem(null);
////		}
////		if (employeeInfoDTO.getKukm() == 0) {
////			employeeInfoDTO.setKukm(null);
////		}
////		if (employeeInfoDTO.getGunm() == 0) {
////			employeeInfoDTO.setGunm(null);
////		}
////		if (employeeInfoDTO.getGom() == 0) {
////			employeeInfoDTO.setGom(null);
////		}
////		if (employeeInfoDTO.getSanm() == 0) {
////			employeeInfoDTO.setSanm(null);
////		}
//
//		int rtn = employeeMapper.insertEmp(employeeInfoDTO);
//
//		return rtn;
		return 0;
	}

	private String get_Empno() {
		String str = "";
		for (int i = 0; i < 6; i++) {
			switch ((int) ((Math.random() * 3) + 1)) {
			case 1:
				str += Integer.toString((int) (Math.random() * 9));
				break;
			case 2:
				str += (char) (int) ((Math.random() * 26) + 65);
				break;
			case 3:
				str += (char) (int) ((Math.random() * 26) + 97);
				break;
			}
		}

		String day = LocalDate.now().toString().replaceAll("-", "").substring(2);
		return "E-" + day + "-" + str;
	}

	@Override
	public List<EmployeeInfoDTO> selectEmpAll(EmployeeInfoDTO employeeInfoDTO) throws Exception {
		List<EmployeeInfoDTO> list = employeeMapper.selectEmpAll(employeeInfoDTO);

		return list;
	}

	@Override
	public List<EmployeeInfoDTO> selectEmpName(EmployeeInfoDTO employeeInfoDTO) throws Exception {
		List<EmployeeInfoDTO> list = employeeMapper.selectEmpName(employeeInfoDTO);

		return list;
	}

	@Override
	public List<EmployeeInfoDTO> selectEmpDetail(EmployeeInfoDTO employeeInfoDTO) throws Exception {
		List<EmployeeInfoDTO> list = employeeMapper.selectEmpDetail(employeeInfoDTO);

//		System.out.println(list.get(2).getImg());
//
//		byte arr[] = blobToBytes((Blob) list.get(2).getImg());
//
//		if (arr.length > 0 && arr != null) { // 데이터가 들어 있는 경우
//			// 바이트를 base64인코딩 실시
//			String base64Encode = byteToBase64(arr);
//			base64Encode = "data:image/png;base64," + base64Encode;
//			System.out.println(base64Encode);
//		} else {
//		}

		return list;
	}

	private static byte[] blobToBytes(Blob blob) {
		BufferedInputStream is = null;
		byte[] bytes = null;
		try {
			is = new BufferedInputStream(blob.getBinaryStream());
			bytes = new byte[(int) blob.length()];
			int len = bytes.length;
			int offset = 0;
			int read = 0;

			while (offset < len && (read = is.read(bytes, offset, len - offset)) >= 0) {
				offset += read;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return bytes;
	}

	// [byte를 base64로 인코딩 해주는 메소드]
	private static String byteToBase64(byte[] arr) {
		String result = "";
		try {
			result = Base64Utils.encodeToString(arr);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
