package com.week9API.demo.orderResponse;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {

    private int id;
    private String title;
    private String author;
    private String publisher;
    private String customerName;
    private String customerEmail;
    private byte[] giftMessage;
}
