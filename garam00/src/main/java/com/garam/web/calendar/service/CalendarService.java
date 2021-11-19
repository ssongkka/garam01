package com.garam.web.calendar.service;

import java.util.List;

import com.garam.web.calendar.domain.CalendarDTO;

public interface CalendarService {
	public List<CalendarDTO> selectCalendarEvent(CalendarDTO calendarDTO);
}
