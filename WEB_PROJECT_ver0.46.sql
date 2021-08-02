/********logs
ver0.4:
	added table serversip
ver0.45: 
	added table userips
ver0.46 
  added the database creation
********/
/********CREATE web DATABASE********/
CREATE DATABASE  IF NOT EXISTS web ; 


/********CREATE user TABLE********/

CREATE TABLE  IF NOT EXISTS web.user(
  user_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
  role ENUM ('Admin','User') NOT NULL DEFAULT 'User',
  username varchar(60) NOT NULL,
  password longtext NOT NULL,
  
  PRIMARY KEY (user_id)
  );


/********CREATE entries TABLE********/

CREATE TABLE IF NOT EXISTS web.entries (
entry_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
user_id  smallint UNSIGNED NOT NULL,
date_registered datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
started_date_time varchar(255) NOT NULL,
server_ip_address varchar(255) DEFAULT NULL,
timings_wait int UNSIGNED,
request_method ENUM ('POST','GET','PUT','HEAD','DELETE','CONNECT','OPTIONS','TRACE','PATCH') DEFAULT NULL,
url varchar (255) NOT NULL,
host_request   varchar(255) DEFAULT NULL,
pragma_request   varchar(255) DEFAULT NULL,
cache_control_request   varchar(255) DEFAULT NULL,
status   varchar(255) DEFAULT NULL,
status_text   varchar(255) DEFAULT NULL,
cache_control_response   varchar(255) DEFAULT NULL,
pragma_response   varchar(255) DEFAULT NULL,
age_response   varchar(255) DEFAULT NULL,
last_modified_response   varchar(255) DEFAULT NULL,
content_type_response   varchar(255) DEFAULT NULL,
expires_response   varchar(255) DEFAULT NULL,

PRIMARY KEY (entry_id),
FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE  

);


/********CREATE serversip TABLE********/

CREATE TABLE IF NOT EXISTS web.serversip (
server_ip varchar(30) NOT NULL,
user_id  smallint UNSIGNED NOT NULL,
lat double NOT NULL,
lng double NOT NULL,

PRIMARY KEY (server_ip),
FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE  
);


/********CREATE userips TABLE********/

CREATE TABLE IF NOT EXISTS web.userips (
  ip_address varchar(50) NOT NULL,
  user_id smallint UNSIGNED NOT NULL,
  lat double NOT NULL,
  lng double NOT NULL,
  isp varchar(100) NOT NULL,
  
  PRIMARY KEY (ip_address),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE   
);
 
 
    
    
  
