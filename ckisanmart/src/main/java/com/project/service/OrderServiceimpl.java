package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.pojo.Order;
import com.project.pojo.User;
import com.project.repository.IOrderRepository;
import com.project.repository.IUserRepository;

@Service
@Transactional
public class OrderServiceimpl implements IorderService{

	@Autowired
	private IOrderRepository iorderrepo;
	@Autowired
	private IUserRepository iuserrepo;
	
	@Override
	public List<Order> getordersdetails(String name) {
		User u=iuserrepo.findByEmail(name).orElseThrow();
		
				return iorderrepo.findByUser(u);
	}

}
