package com.week9API.demo.service;


import com.week9API.demo.entity.BookOrder;
import com.week9API.demo.orderResponse.OrderResponse;
import com.week9API.demo.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;
    @Autowired
    private ModelMapper modelMapper;

    @Transactional //(readOnly = false,isolation = Isolation.READ_COMMITTED,propagation = Propagation.REQUIRED)
    public OrderResponse saveBook(BookOrder bookOrder){
        OrderResponse saved = new OrderResponse();
        modelMapper.map(repository.save(bookOrder),saved);
        return saved;
    }
    public List<BookOrder> saveBooks(List<BookOrder> bookOrders){
        return repository.saveAll(bookOrders);
    }
    public List<BookOrder> getBooks(){
        return repository.findAll();
    }
    public OrderResponse getBookById(int id){
        BookOrder newBookOrder = repository.findById(id).orElse(null);
        OrderResponse orderResponse = new OrderResponse();
        modelMapper.map(newBookOrder, orderResponse);
        return orderResponse;
    }
    public String deleteBook(int id){
        repository.deleteById(id);
        return "This order was removed:" +id;
    }

    public OrderResponse updateOrder(int id, BookOrder bookOrder){
        BookOrder existingOrder = repository.findById(id).orElse(null);
        existingOrder.setTitle(bookOrder.getTitle());
        existingOrder.setAuthor(bookOrder.getAuthor());
        existingOrder.setPublisher(bookOrder.getPublisher());
        existingOrder.setCustomerEmail(bookOrder.getCustomerEmail());
        BookOrder updated = repository.save(existingOrder);
        OrderResponse updatedOrderResponse = new OrderResponse();
        modelMapper.map(updated,updatedOrderResponse);
        return updatedOrderResponse;
    }
}
