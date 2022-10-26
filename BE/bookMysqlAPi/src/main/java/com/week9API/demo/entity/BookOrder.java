package com.week9API.demo.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="BookOrders")
public class BookOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="customerName",nullable=false)
    private String customerName;

    @Column(name="customerEmail",nullable=false)
    private String customerEmail;
    @Column(name="title",nullable = false)
    private String title;
    @Column(name="author",nullable = false)
    private String author;
    @Column(name="publisher",nullable = false)
    private String publisher;

    @Column(name="giftMessage",nullable=true)
    private String giftMessage;

    }


