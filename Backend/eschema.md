#### users Table

```sql

CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name VARCHAR (255) NOT NULL, username VARCHAR (255) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL, salt VARCHAR (255) NOT NULL, hashed_password VARCHAR (255) NOT NULL, PRIMARY KEY (id));
```

#### json_data Table

```sql

CREATE TABLE json_data (id INT, user_id VARCHAR(255), title VARCHAR(255), body TEXT;
```