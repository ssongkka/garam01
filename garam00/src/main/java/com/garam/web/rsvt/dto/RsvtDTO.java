package com.garam.web.rsvt.dto;

import java.text.NumberFormat;
import java.time.LocalDate;

public class RsvtDTO {
	// 번호
	private Integer ctmseq;

	private Integer ctmsepa;

	// 학교이름
	private String ctmname;

	// 지번주소
	private String ctmaddress;

	// 전화1
	private String ctmtel1;

	// 전화2
	private String ctmtel2;

	// 팩스
	private String ctmfax;

	// 홈페이지
	private String ctmhomepage;

	private String ctmstp;

	private String ctmdetail;

	// 삭제여부
	private Integer ctmtrash;

	private Long rsvtseq;

	// 예약번호
	private String rsvt;

	// 예약 시간
	private String datein;

	// 예약 수정
	private String datech;

	// 예약 담당자
	private String empin;

	// 운행시작일
	private String stday;

	// 운행종료일
	private String endday;

	// 차량종류
	private String bus;

	// 운행대수
	private Integer num;

	// 목적지
	private String desty;

	// 출발장소
	private String rsvpstp;

	// 출발시간
	private String stt;

	// 종료시간
	private String endt;

	// 운행상세정보
	private String rsvtdetail;

	// 계약형태
	private String cont;

	// 계약금액
	private Integer conm;

	// 예약확인
	private String confirm;

	// 삭제여부
	private Integer confirmm;

	private Integer rsvttrash;

	public Integer getCtmseq() {
		return ctmseq;
	}

	// 번호
	private Long operseq;

	// 운행번호
	private String opernum;

	// 운행일
	private LocalDate operday;

	// 호차
	private Integer operno;

	// 운행회사
	private String opercom;

	// 차대번호
	private String opercar;

	// 사원번호
	private String operid;

	// 운행금액
	private Integer numm;

	// 배차금액
	private Integer atlm;

	// 편도왕복
	private Integer opertype;

	// 운행확정
	private Integer operconfirm;

	// 삭제여부
	private Integer opertrash;

	public Integer getCtmsepa() {
		return ctmsepa;
	}

	public void setCtmsepa(Integer ctmsepa) {
		this.ctmsepa = ctmsepa;
	}

	public String getCtmname() {
		return ctmname;
	}

	public void setCtmname(String ctmname) {
		this.ctmname = ctmname;
	}

	public String getCtmaddress() {
		return ctmaddress;
	}

	public void setCtmaddress(String ctmaddress) {
		this.ctmaddress = ctmaddress;
	}

	public String getCtmtel1() {
		return ctmtel1;
	}

	public void setCtmtel1(String ctmtel1) {
		this.ctmtel1 = ctmtel1;
	}

	public String getCtmtel2() {
		return ctmtel2;
	}

	public void setCtmtel2(String ctmtel2) {
		this.ctmtel2 = ctmtel2;
	}

	public String getCtmfax() {
		return ctmfax;
	}

	public void setCtmfax(String ctmfax) {
		this.ctmfax = ctmfax;
	}

	public String getCtmhomepage() {
		return ctmhomepage;
	}

	public void setCtmhomepage(String ctmhomepage) {
		this.ctmhomepage = ctmhomepage;
	}

	public String getCtmstp() {
		return ctmstp;
	}

	public void setCtmstp(String ctmstp) {
		this.ctmstp = ctmstp;
	}

	public String getCtmdetail() {
		return ctmdetail;
	}

	public void setCtmdetail(String ctmdetail) {
		this.ctmdetail = ctmdetail;
	}

	public Integer getCtmtrash() {
		return ctmtrash;
	}

	public void setCtmtrash(Integer ctmtrash) {
		this.ctmtrash = ctmtrash;
	}

	public Long getRsvtseq() {
		return rsvtseq;
	}

	public void setRsvtseq(Long rsvtseq) {
		this.rsvtseq = rsvtseq;
	}

	public String getRsvt() {
		return rsvt;
	}

	public void setRsvt(String rsvt) {
		this.rsvt = rsvt;
	}

	public String getDatein() {
		return datein;
	}

	public void setDatein(String datein) {
		this.datein = datein;
	}

	public String getDatech() {
		return datech;
	}

	public void setDatech(String datech) {
		this.datech = datech;
	}

	public String getEmpin() {
		return empin;
	}

	public void setEmpin(String empin) {
		this.empin = empin;
	}

	public String getStday() {
		return stday;
	}

	public void setStday(String stday) {
		this.stday = stday;
	}

	public String getEndday() {
		return endday;
	}

	public void setEndday(String endday) {
		this.endday = endday;
	}

	public String getBus() {
		return bus;
	}

	public void setBus(String bus) {
		this.bus = bus;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getDesty() {
		return desty;
	}

	public void setDesty(String desty) {
		this.desty = desty;
	}

	public String getRsvpstp() {
		return rsvpstp;
	}

	public void setRsvpstp(String rsvpstp) {
		this.rsvpstp = rsvpstp;
	}

	public String getStt() {
		return stt;
	}

	public void setStt(String stt) {
		this.stt = stt;
	}

	public String getEndt() {
		return endt;
	}

	public void setEndt(String endt) {
		this.endt = endt;
	}

	public String getRsvtdetail() {
		return rsvtdetail;
	}

	public void setRsvtdetail(String rsvtdetail) {
		this.rsvtdetail = rsvtdetail;
	}

	public String getCont() {
		return cont;
	}

	public void setCont(String cont) {
		this.cont = cont;
	}

	public Integer getConm() {
		return conm;
	}

	public void setConm(Integer conm) {
		this.conm = conm;
	}

	public String getConfirm() {
		return confirm;
	}

	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}

	public Integer getConfirmm() {
		return confirmm;
	}

	public void setConfirmm(Integer confirmm) {
		this.confirmm = confirmm;
	}

	public Integer getRsvttrash() {
		return rsvttrash;
	}

	public void setRsvttrash(Integer rsvttrash) {
		this.rsvttrash = rsvttrash;
	}

	public Long getOperseq() {
		return operseq;
	}

	public void setOperseq(Long operseq) {
		this.operseq = operseq;
	}

	public String getOpernum() {
		return opernum;
	}

	public void setOpernum(String opernum) {
		this.opernum = opernum;
	}

	public LocalDate getOperday() {
		return operday;
	}

	public void setOperday(LocalDate operday) {
		this.operday = operday;
	}

	public Integer getOperno() {
		return operno;
	}

	public void setOperno(Integer operno) {
		this.operno = operno;
	}

	public String getOpercom() {
		return opercom;
	}

	public void setOpercom(String opercom) {
		this.opercom = opercom;
	}

	public String getOpercar() {
		return opercar;
	}

	public void setOpercar(String opercar) {
		this.opercar = opercar;
	}

	public String getOperid() {
		return operid;
	}

	public void setOperid(String operid) {
		this.operid = operid;
	}

	public Integer getNumm() {
		return numm;
	}

	public void setNumm(Integer numm) {
		this.numm = numm;
	}

	public Integer getAtlm() {
		return atlm;
	}

	public void setAtlm(Integer atlm) {
		this.atlm = atlm;
	}

	public Integer getOpertype() {
		return opertype;
	}

	public void setOpertype(Integer opertype) {
		this.opertype = opertype;
	}

	public Integer getOperconfirm() {
		return operconfirm;
	}

	public void setOperconfirm(Integer operconfirm) {
		this.operconfirm = operconfirm;
	}

	public Integer getOpertrash() {
		return opertrash;
	}

	public void setOpertrash(Integer opertrash) {
		this.opertrash = opertrash;
	}

	public void setCtmseq(Integer ctmseq) {
		this.ctmseq = ctmseq;
	}

	@Override
	public String toString() {
		return "RsvtDTO [ctmseq=" + ctmseq + ", ctmsepa=" + ctmsepa + ", ctmname=" + ctmname + ", ctmaddress="
				+ ctmaddress + ", ctmtel1=" + ctmtel1 + ", ctmtel2=" + ctmtel2 + ", ctmfax=" + ctmfax + ", ctmhomepage="
				+ ctmhomepage + ", ctmstp=" + ctmstp + ", ctmdetail=" + ctmdetail + ", ctmtrash=" + ctmtrash
				+ ", rsvtseq=" + rsvtseq + ", rsvt=" + rsvt + ", datein=" + datein + ", datech=" + datech + ", empin="
				+ empin + ", stday=" + stday + ", endday=" + endday + ", bus=" + bus + ", num=" + num + ", desty="
				+ desty + ", rsvpstp=" + rsvpstp + ", stt=" + stt + ", endt=" + endt + ", rsvtdetail=" + rsvtdetail
				+ ", cont=" + cont + ", conm=" + conm + ", confirm=" + confirm + ", confirmm=" + confirmm
				+ ", rsvttrash=" + rsvttrash + ", operseq=" + operseq + ", opernum=" + opernum + ", operday=" + operday
				+ ", operno=" + operno + ", opercom=" + opercom + ", opercar=" + opercar + ", operid=" + operid
				+ ", numm=" + numm + ", atlm=" + atlm + ", opertype=" + opertype + ", operconfirm=" + operconfirm
				+ ", opertrash=" + opertrash + ", getCtmseq()=" + getCtmseq() + ", getCtmsepa()=" + getCtmsepa()
				+ ", getCtmname()=" + getCtmname() + ", getCtmaddress()=" + getCtmaddress() + ", getCtmtel1()="
				+ getCtmtel1() + ", getCtmtel2()=" + getCtmtel2() + ", getCtmfax()=" + getCtmfax()
				+ ", getCtmhomepage()=" + getCtmhomepage() + ", getCtmstp()=" + getCtmstp() + ", getCtmdetail()="
				+ getCtmdetail() + ", getCtmtrash()=" + getCtmtrash() + ", getRsvtseq()=" + getRsvtseq()
				+ ", getRsvt()=" + getRsvt() + ", getDatein()=" + getDatein() + ", getDatech()=" + getDatech()
				+ ", getEmpin()=" + getEmpin() + ", getStday()=" + getStday() + ", getEndday()=" + getEndday()
				+ ", getBus()=" + getBus() + ", getNum()=" + getNum() + ", getDesty()=" + getDesty() + ", getRsvpstp()="
				+ getRsvpstp() + ", getStt()=" + getStt() + ", getEndt()=" + getEndt() + ", getRsvtdetail()="
				+ getRsvtdetail() + ", getCont()=" + getCont() + ", getConm()=" + getConm() + ", getConfirm()="
				+ getConfirm() + ", getConfirmm()=" + getConfirmm() + ", getRsvttrash()=" + getRsvttrash()
				+ ", getOperseq()=" + getOperseq() + ", getOpernum()=" + getOpernum() + ", getOperday()=" + getOperday()
				+ ", getOperno()=" + getOperno() + ", getOpercom()=" + getOpercom() + ", getOpercar()=" + getOpercar()
				+ ", getOperid()=" + getOperid() + ", getNumm()=" + getNumm() + ", getAtlm()=" + getAtlm()
				+ ", getOpertype()=" + getOpertype() + ", getOperconfirm()=" + getOperconfirm() + ", getOpertrash()="
				+ getOpertrash() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

}