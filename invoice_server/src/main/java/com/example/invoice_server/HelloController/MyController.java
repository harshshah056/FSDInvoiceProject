package com.example.invoice_server.HelloController;

import com.example.invoice_server.HelloService.MyService;
import com.example.invoice_server.entity.Invoice;
import com.example.invoice_server.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin("/")
@RestController
public class MyController {

    @Autowired
    MyService ms;


    @RequestMapping("/hello")
    String hello1()
    {
        return  "hello ujas";
    }

    @GetMapping("/login")
    List<User> getUser()
    {
        return ms.find();
    }

    @PostMapping("/signup")
    void save(@RequestBody User u )
    {
            ms.store(u);
    }


        //----------------------------------------
        @PostMapping("/invoice")
        public Invoice addInvoice(@RequestBody Invoice invoice) {
            return this.ms.addInvoice(invoice);
        }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices() {
        return this.ms.getInvoices();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.ms.deleteInvoice(Long.parseLong(invoiceId));
    }

}
