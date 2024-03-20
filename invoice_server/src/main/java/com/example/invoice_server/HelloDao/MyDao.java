package com.example.invoice_server.HelloDao;

import com.example.invoice_server.entity.Invoice;
import com.example.invoice_server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

 public interface MyDao extends JpaRepository<User,Integer>{

}


