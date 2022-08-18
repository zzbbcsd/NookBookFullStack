package com.week9API.demo.service;


import com.week9API.demo.entity.Song;
import com.week9API.demo.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {

    @Autowired
    private SongRepository repository;

    public Song saveSong(Song song){
        return repository.save(song);
    }
    public List<Song> saveSong(List<Song> songs){
        return repository.saveAll(songs);
    }
    public List<Song> getSongs(){
        return repository.findAll();
    }
    public Song getSongById(int id){
        return repository.findById(id).orElse(null);
    }
    public String deleteSong(int id){
        repository.deleteById(id);
        return "This song was removed:" +id;
    }

}
