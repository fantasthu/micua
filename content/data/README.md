# Content / Data

## users

```sql
CREATE TABLE `users` (
  `id`	INTEGER PRIMARY KEY AUTOINCREMENT,
  `slug`	VARCHAR(200) NOT NULL UNIQUE,
  `username`	VARCHAR(60) NOT NULL UNIQUE,
  `password`	VARCHAR(255) NOT NULL,
  `nickname`	VARCHAR(60) NOT NULL,
  `email`	VARCHAR(100) NOT NULL UNIQUE,
  `created`	DATETIME NOT NULL,
  `modified`	DATETIME NOT NULL,
  `status`	VARCHAR(60) NOT NULL,
  `token`	VARCHAR(255) NOT NULL,
  `role_id`	INTEGER NOT NULL
);
```
