package com.week9API.demo.controller;

import com.week9API.demo.entity.Song;
import com.week9API.demo.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class songController {

    @Autowired
    private SongService service;

    @PostMapping("/api/addSong")
    public Song addSong(@RequestBody Song song){
        return service.saveSong(song);
    }

    @PostMapping("/api/addSongs")
    public List<Song> addSongs(@RequestBody List<Song>songs){
        return service.saveSong(songs);
    }

    @GetMapping("/api/Songs")
    public List<Song> findAllSongs(){
        return service.getSongs();
    }

    @GetMapping("/api/Song/{id}")
    public Song findSongById(@PathVariable  int id){
        return service.getSongById(id);
    }

    @DeleteMapping("/api/Song/{id}")
    public String deleteSong(@PathVariable int id){
        return service.deleteSong(id);
    }

}
