package com.garam.web.admin.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.garam.web.admin.dto.UserSaveRequestDto;
import com.garam.web.admin.entity.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	private final UserRepository userRepository;

	@Transactional
	public String save(UserSaveRequestDto userSaveDto) {
		return userRepository.save(userSaveDto.toEntity()).getId();
	}
}
