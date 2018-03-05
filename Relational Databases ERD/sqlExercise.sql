
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
 
--1. Write a `SELECT` query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the [`LEFT JOIN`](https://www.tutorialspoint.com/sql/sql-using-joins.htm) keyword sequence to connect the tables, and the `WHERE` keyword to filter the results to the album and artist you added. Here is some more info on [joins](http://www.dofactory.com/sql/join) that might help.
SELECT s.title "Song Title", a.title "Album Title", b.artistName
FROM Song AS s 
LEFT JOIN Album AS a ON s.albumId = a.albumId 
LEFT JOIN Artist as b ON s.artistId = b.artistId
WHERE s.AlbumId = (SELECT AlbumId FROM Album WHERE title = "Demon Days");
--    > **Reminder:** Direction of join matters. Try the following statements and see the difference in results.
--
--    ```
--    SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
--    SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;
--    ```
--1. Write a `SELECT` statement to display how many songs exist for each album. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
SELECT COUNT(s.albumId) "Songs on Album", a.title "Album"
FROM Song AS s 
LEFT JOIN Album AS a ON s.albumId = a.albumId
GROUP BY s.albumId;
--1. Write a `SELECT` statement to display how many songs exist for each artist. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
SELECT COUNT(s.artistId) "Song Count", a.artistName "Artist"
FROM Song AS s 
LEFT JOIN Artist AS a ON s.artistId = a.artistId
GROUP BY s.artistId;
--1. Write a `SELECT` statement to display how many songs exist for each genre. You'll need to use the `COUNT()` function and the `GROUP BY` keyword sequence.
SELECT COUNT(s.genreId) "Song Count", g.label "Genre"
FROM Song AS s 
LEFT JOIN Genre AS g ON s.genreId = g.genreId
GROUP BY s.genreId;
--1. Using `MAX()` function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT MAX(albumLength) "Duration", title "Album" from Album;
--1. Using `MAX()` function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
SELECT MAX(songLength) "Duration", title "Song" from Song;
--1. Modify the previous query to also display the title of the album.