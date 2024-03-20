package com.example.invoice_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
            @GeneratedValue
    int id;
    String uName;
    String uPass;
    String uEmailId;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public String getuPass() {
        return uPass;
    }

    public void setuPass(String uPass) {
        this.uPass = uPass;
    }

    public String getuEmailId() {
        return uEmailId;
    }

    public void setuEmailId(String uEmailId) {
        this.uEmailId = uEmailId;
    }



}
