package com.example.invoice_server.HelloService;

import com.example.invoice_server.HelloDao.MyDao;
import com.example.invoice_server.entity.Invoice;
import com.example.invoice_server.entity.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface MyService {



    void store(User u);
    List<User> find();

    //--------------------------


    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);


}
