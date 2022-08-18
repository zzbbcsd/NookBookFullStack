package com.week9API.demo.controller;

import com.week9API.demo.entity.Book;
import com.week9API.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private BookService service;

    @PostMapping("/api/addBook")
    public Book addBook(@RequestBody Book book){
        return service.saveBook(book);
    }

    @PostMapping("/api/addBooks")
    public List<Book> addBooks(@RequestBody List<Book>books){
        return service.saveBooks(books);
    }

    @GetMapping("/api/Books")
    public List<Book> findAllBooks(){
        return service.getBooks();
    }

    @GetMapping("/api/Book/{id}")
    public Book findBookById(@PathVariable  int id){
        return service.getBookById(id);
    }

    @DeleteMapping("/api/Book/{id}")
    public String deleteBook(@PathVariable int id){
        return service.deleteBook(id);
    }

}
