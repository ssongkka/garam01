package com.garam.web.calendar.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.garam.web.calendar.domain.CalendarDTO;

@Mapper
public interface CalendarMapper {
	public List<CalendarDTO> selectCalendarEvent(CalendarDTO calendarDTO);
}
