/********CREATE users TABLE********/


CREATE TABLE users (
  user_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
  role ENUM ('Admin','User') NOT NULL DEFAULT 'User',
  username varchar(60) NOT NULL,
  password longtext NOT NULL,
  
  PRIMARY KEY (user_id)
  );
  

  
  




/********CREATE entries TABLE********/

CREATE TABLE entries(
entry_id smallint UNSIGNED AUTO_INCREMENT NOT NULL,
user_id  smallint UNSIGNED NOT NULL,
date_registered datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
startedDateTime varchar(255) NOT NULL,
serverIPAddress varchar(255) DEFAULT NULL,
timings_wait int UNSIGNED,
request_method ENUM ('POST','GET','PUT','HEAD','DELETE','CONNECT','OPTIONS','TRACE','PATCH') DEFAULT NULL,
url varchar (255) NOT NULL,
hostRequest   varchar(255) DEFAULT NULL,
pragmaRequest   varchar(255) DEFAULT NULL,
cache_controlRequest   varchar(255) DEFAULT NULL,
status   varchar(255) DEFAULT NULL,
statusText   varchar(255) DEFAULT NULL,
cache_controlResponse   varchar(255) DEFAULT NULL,
pragmaResponse   varchar(255) DEFAULT NULL,
ageResponse   varchar(255) DEFAULT NULL,
last_modifiedResponse   varchar(255) DEFAULT NULL,
content_typeResponse   varchar(255) DEFAULT NULL,
expiresResponse   varchar(255) DEFAULT NULL,

PRIMARY KEY (entry_id),
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE  

);


/********CREATE serversip TABLE********/
CREATE TABLE serversip(
user_id  smallint UNSIGNED NOT NULL,
server_ip varchar(30) NOT NULL,
lat double NOT NULL,
lng double NOT NULL,

PRIMARY KEY (server_ip),
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE  
);


 
 
    
    
  