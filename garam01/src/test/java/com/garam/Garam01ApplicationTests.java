package com.garam;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.commons.net.ftp.FTPClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.PropertySource;

import com.garam.web.Utils.FTPManager;

@SpringBootTest
@PropertySource("classpath:/application.properties")
class Garam01ApplicationTests {

	@Test
	void contextLoads() throws IOException {

		String aasd = "C:\\Users\\ssong\\Downloads\\busstop.png";

		String[] tmpArr = aasd.split("\\");
		String tmpFile = tmpArr[tmpArr.length - 1].split(".")[1];
		String ftpImgEmp = "/HDD2/src/img/emp/";
		String ftpRoot = ftpImgEmp + "하하핳이이이용" + "." + tmpFile;

		System.out.println(ftpRoot);

	}

	@Test
	void ftp() throws IOException {
		FTPManager aaa = new FTPManager();

		System.out.println(aaa.connect());

		FTPClient ccc = aaa.connect();

		System.out.println("fasfasfsfsaf");
		System.out.println(ccc.isConnected());

		String name1 = "HDD2/busstop.png";
		String name = "C:\\Users\\ssong\\Downloads\\busstop.png";

		File file = new File(name);
		System.out.println(file);

		FileInputStream fis = new FileInputStream(file);

		System.out.println(fis);

		System.out.println(ccc.getLocalAddress());
		System.out.println(ccc.getBufferSize());

//		for (int i = 0; i < ccc.listDirectories().length; i++) {
//			System.out.println(ccc.listDirectories()[i]);
//		}
		for (int i = 0; i < ccc.listDirectories("HDD2/ERP_BUS").length; i++) {
			System.out.println(ccc.listDirectories("HDD2/ERP_BUS")[i]);
		}
		for (int i = 0; i < ccc.listDirectories("HDD2").length; i++) {
			System.out.println(ccc.listDirectories("HDD2")[i]);
		}

		for (int i = 0; i < ccc.listFiles("HDD2/").length; i++) {
			System.out.println("asdasd");
			System.out.println(ccc.listFiles("HDD2/")[i]);
		}

		System.out.println(ccc.storeFile(name1, fis));

		aaa.disconnect(ccc);
	}

	@Value("${ftp.host}")
	private String host; // FTP 접속 호스트

	@Value("${ftp.username}")
	private String username; // FTP 로그인 id

	@Value("${ftp.password}")
	private String password; // FTP 로그인 pw

	@Value("${ftp.port}")
	private int port; // FTP 로그인 pw

	@Value("${ftp.empFolder}")
	private String empFolder;

	@Value("${ftp.carFolder}")
	private String carFolder;

	@Test
	void asd() {

		System.out.println("하이요   " + host);
		System.out.println("하이요   " + username);
		System.out.println("하이요   " + password);
		System.out.println("하이요   " + host);

	}
}
