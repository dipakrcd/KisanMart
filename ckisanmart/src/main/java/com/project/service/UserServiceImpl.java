package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.pojo.User;
import com.project.repository.IUserRepository;
@Service
@Transactional
public class UserServiceImpl implements IUserServices {

	@Autowired
	private IUserRepository iUserRepo;
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public Optional<User> getUser(String email) {
		
		return iUserRepo.findByEmail(email);
	}
	@Override
	public User registerUser(User user) {
		user.setPassword(encoder.encode(user.getPassword()));
	return iUserRepo.save(user);
		
	}

}
