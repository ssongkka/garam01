package com.garam.web.rsvt.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.garam.web.rsvt.service.RsvtService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/rsvtmany")
@RequiredArgsConstructor
public class RestRsvtManyController {

	private final RsvtService rsvtService;

	@PostMapping(value = "/insert")
	public int customerName(@RequestBody List<Map<String, Object>> map) throws Exception {

		System.out.println("몇몇몇   " + map.size());
		System.out.println("먀먀먀   " + map);

		int rst = rsvtService.insertManyRsvt(map);

		return rst;
	}
}
