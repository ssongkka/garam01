package com.garam.web.calendar.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garam.web.calendar.domain.CalendarDTO;
import com.garam.web.calendar.mapper.CalendarMapper;

@Service
public class CalendarServiceImpl implements CalendarService {

	@Autowired
	CalendarMapper calendarMapper;

	@Override
	public List<CalendarDTO> selectCalendarEvent(CalendarDTO calendarDTO) {
		List<CalendarDTO> list = Collections.emptyList();

		list = calendarMapper.selectCalendarEvent(calendarDTO);

		return list;
	}
}