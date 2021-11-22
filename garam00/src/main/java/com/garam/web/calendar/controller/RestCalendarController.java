package com.garam.web.calendar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.garam.web.calendar.domain.CalendarDTO;
import com.garam.web.calendar.service.CalendarService;

@RestController
@RequestMapping(value = "/calendar")
public class RestCalendarController {

	@Autowired
	private CalendarService calendarService;

	@PostMapping(value = "/event")
	public List<CalendarDTO> selectCalendarDetail(@RequestBody CalendarDTO calendarDTO) throws Exception {
		return calendarService.selectCalendarEvent(calendarDTO);
	}
}