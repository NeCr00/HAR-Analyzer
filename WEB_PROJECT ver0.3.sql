/********CREATE users TABLE********/


CREATE TABLE users (
  user_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
  role ENUM ('Admin','User') NOT NULL DEFAULT 'User',
  username varchar(60) NOT NULL,
  password longtext NOT NULL,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
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
request_method ENUM ('POST','GET'),
request_url varchar(100),
response_id smallint UNSIGNED, 
response_status smallint,
response_status_text varchar(100),
server_ip varchar(30),
date_registered datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
timings_wait int UNSIGNED,
PRIMARY KEY (entry_id),
FOREIGN KEY (file_id) REFERENCES files(file_id) ON DELETE SET NULL ON UPDATE CASCADE  
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
    
    
    
  