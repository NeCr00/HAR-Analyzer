/********CREATE users TABLE********/


CREATE TABLE users (
  user_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
  role ENUM ('Admin','User') NOT NULL DEFAULT 'User',
  username varchar(60) NOT NULL,
  password longtext NOT NULL,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  gender ENUM('Male','Female') NOT NULL,
  email varchar(50) NOT NULL,
  phone varchar(20) DEFAULT "0000000000",
  date_registered datetime DEFAULT '0000-00-00 00:00:00',
  active BOOLEAN DEFAULT TRUE,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
  );
  
  CREATE TRIGGER `user_create_date` BEFORE INSERT ON `users` FOR EACH ROW SET NEW.date_registered = NOW();
  
  

 /********CREATE files TABLE********/
 
  CREATE TABLE files (
  file_id int UNSIGNED AUTO_INCREMENT NOT NULL,
  file_name varchar(50) NOT NULL,
  user_id smallint UNSIGNED,
  PRIMARY KEY (file_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE  
); 


/********CREATE entries TABLE********/

CREATE TABLE entries(
entry_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
file_id int UNSIGNED,
request_id smallint UNSIGNED,
response_id smallint UNSIGNED, 
server_ip varchar(30),
date_registered datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
timmings_id smallint UNSIGNED,
PRIMARY KEY (entry_id),
FOREIGN KEY (file_id) REFERENCES files(file_id) ON DELETE SET NULL ON UPDATE CASCADE  
);


/********CREATE request TABLE********/
CREATE TABLE request(
request_id int UNSIGNED AUTO_INCREMENT NOT NULL,
entry_id smallint UNSIGNED,
method ENUM ('POST','GET'),
request_url varchar(100),
headers_id int UNSIGNED,
PRIMARY KEY (request_id),
FOREIGN KEY (entry_id) REFERENCES entries(entry_id) ON DELETE CASCADE  
);


/********CREATE response TABLE********/
CREATE TABLE response(
response_id int UNSIGNED AUTO_INCREMENT NOT NULL,
entry_id smallint UNSIGNED,
status smallint,
status_text varchar(100),
headers_id int UNSIGNED,
PRIMARY KEY (response_id),
FOREIGN KEY (entry_id) REFERENCES entries(entry_id) ON DELETE CASCADE  
);
 
 
 /********CREATE request_headers TABLE********/
 CREATE TABLE request_headers(
 header_id int UNSIGNED AUTO_INCREMENT NOT NULL,
 request_id int UNSIGNED,
 content_type varchar(100),
 cache_control varchar(100),
 pragma varchar(100),
 expires datetime DEFAULT '0000-00-00 00:00:00',
 age smallint,
 last_modified datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 host varchar(100),
 PRIMARY KEY (header_id),
 FOREIGN KEY (request_id) REFERENCES request(request_id) ON DELETE CASCADE  
 );
 
 /********CREATE response_headers TABLE********/
 CREATE TABLE response_headers(
 header_id int UNSIGNED AUTO_INCREMENT NOT NULL,
 response_id int UNSIGNED ,
 content_type varchar(100),
 cache_control varchar(100),
 pragma varchar(100),
 expires datetime DEFAULT '0000-00-00 00:00:00',
 age smallint,
 last_modified datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 host varchar(100),
 PRIMARY KEY (header_id),
 FOREIGN KEY (response_id) REFERENCES response(response_id) ON DELETE CASCADE  

 );
    
    
    
  