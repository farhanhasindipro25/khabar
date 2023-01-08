# HOW TO SETUP THIS PROJECT IN YOUR LOCAL DEVICE

### GETTING THE FILES
**Clone this GitHub Repository to your desired location**

### DATABASE SETUP

1. Open PGAdmin
2. Create a new database called "khabar".
3. Right click on the database name and select restore.
4. Click on browse and select the 'khabardb.backup' file.
5. Select 'postgres' as the role. 
6. Click Restore.
7. Now open up psql (SQL Shell).
8. Input the following:


```

Server [localhost]: localhost
Database [postgres]: postgres
Port [5432]: 5432
Username [postgres]: postgres
Password for user postgres: **ENTER PASSWORD FOR YOUR DEVICE'S POSTGRESQL**

```

9. Now you to see all databases, run:

```

 \l 

```

10. Then to navigate to the database, run:

``` 

\c khabardabar 

```

11. Now to check the users table, run:

``` 

SELECT * FROM users; 

```

12. Then, to check the menuitems table, run;

``` 

SELECT * FROM menuitems;

```

### SERVER-SIDE SETUP

1. Copy the path till the server from the cloned GitHub repository.
2. Open up your terminal/command prompt and paste it.
3. Run:

```

nodemon index.js

```

4. To check from the browser, run: 'http://localhost:5000'. You will get a message: 'Khabar server is running'.


### CLIENT-SIDE SETUP

1. Right click on the cloned GitHub repository and open it with VS Code.
2. Open up a terminal and run

```

cd client

```

3. Then run:

```

npm run start

```

**YOU ARE ALL SETUP TO VIEW AND INTERACT WITH THE PROJECT**