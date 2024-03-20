package com.example.invoice_server.HelloDao;

import com.example.invoice_server.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {
}
