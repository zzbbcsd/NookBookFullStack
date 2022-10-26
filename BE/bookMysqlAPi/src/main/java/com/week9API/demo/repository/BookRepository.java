package com.week9API.demo.repository;

import com.week9API.demo.entity.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookOrder, Integer> {

}
