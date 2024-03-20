package com.example.invoice_server.HelloService;

//import com.example.invoice_server.HelloDao.MyDao;
import com.example.invoice_server.HelloDao.InvoiceDao;
import com.example.invoice_server.HelloDao.MyDao;
import com.example.invoice_server.entity.Invoice;
import com.example.invoice_server.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyServiceImpl implements MyService {

    @Autowired
    MyDao md;

    @Autowired
    InvoiceDao ido;

    @Override
    public void store(User u) {
        md.save(u);
    }

    @Override
    public List<User> find() {
        return md.findAll();
    }


//--------------------------------

    @Override
    public Invoice addInvoice(Invoice invoice) {
        ido.save(invoice);

        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return ido.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = ido.findById(id).get();
        ido.delete(invoice);
        return invoice;
    }


}
