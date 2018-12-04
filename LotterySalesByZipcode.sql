CREATE DATABASE `lottery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

CREATE TABLE `lotterysalesbyzip` (
  `Business_Name` varchar(500) DEFAULT NULL,
  `Address` varchar(500) DEFAULT NULL,
  `City` varchar(500) DEFAULT NULL,
  `Zip` varchar(500) DEFAULT NULL,
  `Instant_Sales` double DEFAULT NULL,
  `Online_Sales` double DEFAULT NULL,
  `Total_Sales` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOAD DATA INFILE 'C:\Users\Leanne\Desktop\Project-3\LotterySales2013.csv'  /*Change to your directory*/
INTO TABLE lotterysalesbyzip 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

/*Optional syntax below depending on your preference to insert records into the table*/
/*
INSERT INTO `lottery`.`lotterysalesbyzip`
(`Business_Name`,
`Address`,
`City`,
`Zip`,
`Instant_Sales`,
`Online_Sales`,
`Total_Sales`)
VALUES
(<{Business_Name: }>,
<{Address: }>,
<{City: }>,
<{Zip: }>,
<{Instant_Sales: }>,
<{Online_Sales: }>,
<{Total_Sales: }>);
*/
SELECT * FROM lottery.lotterysalesbyzip;