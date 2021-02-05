CREATE TABLE IF NOT EXISTS comment (
	comm_id VARCHAR(20) PRIMARY KEY,
	user_name VARCHAR(25),
	likes INT,
	body VARCHAR(45000),
	parent_com VARCHAR(20),
	post_id VARCHAR(20),
	parent_col VARCHAR(20) NOT NULL,
	FOREIGN KEY(post_id) REFERENCES post(post_id),
	FOREIGN KEY(parent_com) REFERENCES comment(comm_id),
	FOREIGN KEY(post_id) REFERENCES post(post_id)
);