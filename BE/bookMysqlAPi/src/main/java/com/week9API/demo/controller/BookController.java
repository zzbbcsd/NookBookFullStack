package com.week9API.demo.controller;

import com.week9API.demo.entity.BookOrder;
import com.week9API.demo.orderResponse.OrderResponse;
import com.week9API.demo.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@EnableTransactionManagement
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping(path="/api/addOrder",consumes = "application/json")
    public ResponseEntity<OrderResponse> addBook(@RequestBody BookOrder bookOrder){
        try{
            OrderResponse saved = service.saveBook(bookOrder);
            return ResponseEntity.status(HttpStatus.OK).body(saved);
        }catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/api/addOrders")
    public List<BookOrder> addBooks(@RequestBody List<BookOrder> bookOrders){
        return service.saveBooks(bookOrders);
    }

    @GetMapping("/api/Orders")
    public List<BookOrder> findAllBooks(){

        return service.getBooks();
    }

    @GetMapping("/api/Orders/{id}")
    public OrderResponse findBookById(@PathVariable int id){

        return service.getBookById(id);
    }

    @DeleteMapping("/api/Orders/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteBook(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(service.deleteBook(id));
    }

    @PutMapping("/api/Orders/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<OrderResponse> updateOrder(@PathVariable(value="id")int id, @RequestBody BookOrder bookOrder){
        return ResponseEntity.status(HttpStatus.OK).body(service.updateOrder(id, bookOrder));
    }
}
