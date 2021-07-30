/********CREATE users TABLE********/


CREATE TABLE User (
  user_id INT AUTO_INCREMENT NOT NULL,
  role ENUM ('Admin','User') NOT NULL DEFAULT 'User',
  username varchar(255) NOT NULL,
  password longtext NOT NULL,
  PRIMARY KEY (user_id)
  );
  

/********CREATE entries TABLE********/

 CREATE TABLE IF NOT EXISTS Entry
(
    entryId INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    uploadDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    startedDateTime VARCHAR(255) NOT NULL,
    serverIPAddress VARCHAR(255),
    lat VARCHAR(255),
    lng VARCHAR(255),
    wait INT,
    method ENUM('GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'),
    url VARCHAR(2083),
    hostRequest VARCHAR(255),
    pragmaRequest VARCHAR(255),
    cache_controlRequest VARCHAR(255),
    status VARCHAR(255),
    statusText VARCHAR(255),
    cache_controlResponse VARCHAR(255),
    pragmaResponse VARCHAR(255),
    ageResponse VARCHAR(255),
    last_modifiedResponse VARCHAR(255),
    content_typeResponse VARCHAR(255),
    expiresResponse VARCHAR(255),
    PRIMARY KEY (entryId),
    FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
