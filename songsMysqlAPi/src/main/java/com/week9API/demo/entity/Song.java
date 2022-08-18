package com.week9API.demo.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Song_Table")
public class Song {
    @Id
    @GeneratedValue
    private int id;
        private String title;
        private String singer;
        private String genre;

    public Song() {
    }

    public Song(int id, String title, String singer, String genre) {
            this.id = id;
            this.title = title;
            this.singer = singer;
            this.genre = genre;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getSinger() {
            return singer;
        }

        public void setSinger(String singer) {
            this.singer = singer;
        }

        public String getGenre() {
            return genre;
        }

        public void setGenre(String genre) {
            this.genre = genre;
        }

        @Override
        public String toString() {
            return "Song{" +
                    "id=" + id +
                    ", title='" + title + '\'' +
                    '}';
        }
    }


