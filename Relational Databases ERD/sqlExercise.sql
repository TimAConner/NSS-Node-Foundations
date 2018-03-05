
--For each of the following exercises, provide the appropriate query. Everything from class and the [Sqlite](http://www.sqlite.org/) documentation for SQL [keywords](https://www.sqlite.org/lang.html) and [functions](https://www.sqlite.org/lang_corefunc.html) is fair game. Note that 

--1. Query all of the entries in the `Genre` table
select * from Genre;
--1. Using the `INSERT` statement, add one of your favorite artists to the `Artist` table.
INSERT INTO Artist ("ArtistName", "YearEstablished")
VALUES ("Gorillaz", "1998");
--1. Using the `INSERT` statement, add one, or more, albums by your artist to the `Album` table.
INSERT INTO "Album" ("Title", "ReleaseDate", "AlbumLength", "Label", "ArtistId", "GenreId")
 VALUES ("Demon Days", "2005", "50:59", "Parlophone", (select ArtistId from Artist where ArtistName  = "Gorillaz"),  (select GenreId from Genre where Label = "Rock"));
--1. Using the `INSERT` statement, add some songs that are on that album to the `Song` table.
INSERT INTO Song ("Title", "SongLength", "ReleaseDate", "GenreId", "ArtistId", "AlbumId")
 VALUES ("Feel Good Inc.", "3:41", "9 May 2005", (select GenreId from Genre where Label = "Rock"), (select ArtistId from Artist where ArtistName = "Gorillaz"), (select AlbumId from Album where Title = "Demon Days"));
 INSERT INTO Song ("Title", "SongLength", "ReleaseDate", "GenreId", "ArtistId", "AlbumId")
 VALUES ("DARE", "4:04", "29 Aug 2005", (select GenreId from Genre where Label = "Rock"), (select ArtistId from Artist where ArtistName = "Gorillaz"), (select AlbumId from Album where Title = "Demon Days"));
 
