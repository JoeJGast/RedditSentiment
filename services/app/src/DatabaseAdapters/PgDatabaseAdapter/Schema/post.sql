CREATE TABLE IF NOT EXISTS post (
	post_id VARCHAR(20) PRIMARY KEY,
	title VARCHAR(300),
	body VARCHAR(45000),
	datePosted DATE,
	user_name VARCHAR(25),
	likes INT,
    col_id VARCHAR(20),
	FOREIGN KEY(col_id) REFERENCES collection(col_id)
);