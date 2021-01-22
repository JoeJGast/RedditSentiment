CREATE TABLE IF NOT EXISTS collection (
	col_id VARCHAR(20) PRIMARY KEY,
	col_name VARCHAR(25) UNIQUE, 
	last_refresh DATE NOT NULL DEFAULT CURRENT_DATE
);
CREATE TABLE IF NOT EXISTS posts (
	post_id VARCHAR(20) PRIMARY KEY,
	title VARCHAR(300),
	body VARCHAR(45000),
	datePosted DATE,
	user_name VARCHAR(25),
	likes INT,
    col_id VARCHAR(20),
	FOREIGN KEY(col_id) REFERENCES collection(col_id)
);
CREATE TABLE IF NOT EXISTS comments (
	comm_id VARCHAR(20) PRIMARY KEY,
	user_name VARCHAR(25),
	likes INT,
	body VARCHAR(45000),
	parent_com VARCHAR(20),
	post_id VARCHAR(20),
	parent_col VARCHAR(20) NOT NULL,
	FOREIGN KEY(post_id) REFERENCES posts(post_id),
	FOREIGN KEY(parent_com) REFERENCES comments(comm_id),
	FOREIGN KEY(post_id) REFERENCES posts(post_id)
);