package com.garam.calendar.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garam.calendar.domain.CalendarDTO;
import com.garam.calendar.mapper.CalendarMapper;

@Service
public class CalendarServiceImpl implements CalendarService {

	@Autowired
	CalendarMapper calendarMapper;

	@Override
	public List<CalendarDTO> selectCalendarEvent(CalendarDTO calendarDTO) throws Exception {
		List<CalendarDTO> list = Collections.emptyList();

		list = calendarMapper.selectCalendarEvent(calendarDTO);

		return list;
	}
}