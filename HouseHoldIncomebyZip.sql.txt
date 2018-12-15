Use Lottery;

CREATE TABLE `householdincomebyzip` (
  `Zip` varchar(5) NOT NULL,
  `Number_of_returns_Total_Individual` int(11) DEFAULT NULL,
  `Amount_Total_Individual` decimal(15,2) DEFAULT NULL,
  `Number_of_returns_Business` int(11) DEFAULT NULL,
  `Amount_Business` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`Zip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOAD DATA INFILE 'C:\Users\Leanne\Desktop\Project-3\HouseHoldIncomebyZip.csv'  /*Change to your directory*/
INTO TABLE householdincomebyzip 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


/*Optional syntax below depending on your preference to insert records into the table*/
/*
INSERT INTO `lottery`.`householdincomebyzip`
(`Zip`,
`Number_of_returns_Total_Individual`,
`Amount_Total_Individual`,
`Number_of_returns_Business`,
`Amount_Business`)
VALUES
(<{Zip: }>,
<{Number_of_returns_Total_Individual: }>,
<{Amount_Total_Individual: }>,
<{Number_of_returns_Business: }>,
<{Amount_Business: }>);
*/
SELECT * FROM lottery.householdincomebyzip;