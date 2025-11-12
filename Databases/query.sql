/* Select all

SELECT * FROM cars;

*/
-------------------------------------------------------
/* Select specific columns

SELECT brand , model  FROM cars

 */
------------------------------------------------------
/* using where clause

select brand , model , color , price from cars
  where color = 'black'

 */
------------------------------------------------------------

/* Using comments to disable part of the query ( SQL INJECTION - TYPE - 1)

select * from cars
  where color = 'red'--' and brand = 'Ferrari';
 -- : USED TO COMMENT A SINGLE LINE IN POSTGRESQL
 */

------------------------------------------------------------------

/* 

select brand , model , condition , price from cars
  where condition = 0

*/

-------------------------------------------------------------------
/* Numerical Filetering 
select brand , model , price from cars
  where price < 50000


*/

---------------------------------------------------------------------

/* Selecting cars which doesnt have yellow color

select * from cars
  where color != 'yellow'


 */

-----------------------------------------------------------------------

/* selecting cars / not selecting which have mixed yellow color like ( pale yellow, ....)  using wildcard chrs (% - matches any chrs , _ - matches exactly one chr) 


select brand , model  , color , year from cars
 where color not like '%yellow%'


select brand , model  , color , year from cars
 where model like 'DB_'

 */

---------------------------------------------------------------------------------

/* Using AND Operator to use multiple conditions 

select brand , model , color from cars
 where color not like '%green%'
 and model like 'DB_' and year > 1964



select brand , model , color , price from cars
 where condition >= 3 
 and year < 1970 
 and price < 100000

 */

----------------------------------------------------------------------------------------------------
/* The BETWEEN Operator  ( when we want rows from a specified timeline like before 19xx and after 19yy 


select * from cars
 where year >= 1980 and year <= 1989

select * from cars
 where year between 1980 and 1989 -- Here 1980 is lowerlimit and 1989 is upperlimit

select brand , model , year from cars
 where price between 20000 and 60000 and 
 condition between 1 and 3 and
 color = 'red'

*/

---------------------------------------------------------------------------------------------------------------------
/* OR Operator used to select rows when any one condition is matched from a set of condititons


select brand , model , color from cars
 where price < 25000 or 
 brand = 'Porsche'


select brand , model , color from cars
 where (price < 25000 or 
 brand = 'Porsche') and condition > 3


select brand , color , model ,sold from cars
 where (color like '%red%' or 
 year  between 1960 and 1969) and 
 sold is false


*/

-------------------------------------------------------------------------------------------

/*
IN Operator ( when we are not sure about which to select like vlaues in a col )
For eg say u have a set of choices like red , blue , yellow and everything is ur favorite now a client may ask i am satisfied with any color which are
present in these choices . So in these cases we use IN clause. With this clause we can avoid using multiple OR Clauses

select brand , model , color , sold , price from cars
 where brand in ('Ford','Chervolet','Ferrari') and
 sold is false

select brand , color , year
 from cars
 where year in (1961,1963) 
 and condition > 2


select brand , sold , year from cars 
 where (
  brand not in ('Ford','Dodge') or 
  price < 50000 ) and 
  sold = false

*/

---------------------------------------------------------------------------------------------------------------

--                  CHALLENGES 
/*
select brand , model ,color  from cars
where color like '%red%' and brand != 'Ferrari' and
 sold is false


select brand , color , model from cars
 where color not in ('red','blue','white') and 
 brand not in ('Aston Martin','Bentley','Jaguar') and
 sold is false


select brand , model , year , sold from cars
  where ((brand = 'Dodge' and year between 1960 and 1969)
  or 
  (brand in ('Ford','Triumph') and year between 1970 and 1979))
  and sold is false


*/

---------------------------------------------------------------------------------------------------------------------
/*
        Order and Aggregates
Order By : which is useful to sort out our results using different cols

select brand , model , year from cars
 order by brand


 select brand , model , year from cars
 order by brand desc


select brand , model , condition , price from cars
 order by condition desc , price 

select brand , model , year from cars
 where sold is false and 
 condition != 5
 order by condition desc,price

*/

-----------------------------------------------------------------------------------------------------------------------------

/*

                 LIMIT 

  Limit is used to set the no of rows we want to be showed ( just like dataset.head(5) in pandas )

select brand , model , price from cars
 order by price desc
 limit 1


select brand , model , price from cars
 where color like '%red%' and 
 sold is false
 order by price asc
 limit 5


*/

------------------------------------------------------------------------------------------------------------------------------------/*
/*

                        COUNT AND SUM

NOTE : Unlike all clauses we have seen these are aggregate fucntions not clauses 

select count(*) as total_sold from cars 
 where sold is true

select sum(price) as total_earnings from cars
 where sold is true


*/

------------------------------------------------------------------------------------------------------

/*

                MAX , MIN , AVG

select max(price) as most_expensive from cars
 where sold is true

select avg(price) as Avg_price_bently from cars
 where brand = 'Bentley'

select ceil(avg(price)) as Avg_price_bently from cars
 where brand = 'Bentley'

 
select floor(avg(price)) as Avg_price_bently from cars
 where brand = 'Bentley'

select ceil(avg(price)) as AVG, min(price) as MIN, max(price) as MAX from cars
 where sold is true


NOTE : All these aggregate functions look up  over the entire column and brigns down the output or result to one
       since min , max ,avg always give a single output

*/

-----------------------------------------------------------------------------------------------------------------------

/*
                     GROUP BY 

using this we can perform more complex aggregate opertions , like counting no of different types of brands / models of cars individually 
jsut like for eg counting no of unique models of cars in our db

select brand , count(brand) as brand_count from cars
 GROUP BY brand

select condition , count(condition) from cars
 group by condition


select brand , count(brand) as brand_count ,
       floor(avg(price)) as Avg_price from cars
       where sold is true
       group by brand
       order by Avg_price desc


*/

----------------------------------------------------------------------------------------------------------------------

/*
                           HAVING

This was introduced to write conditions on aggregated columsn ( for eg where count_brand > 1 - throws an error ) so we 
use this clause to write conditions on aggregated cols

select brand , count(brand) as brand_count ,
       floor(avg(price)) as Avg_price from cars
       where sold is true
       group by brand
       HAVING count(brand) > 1


select year , count(year) as car_count , 
            max(price) , min(price) from cars
            where sold is true
            group by year
            having count(year) > 1
            order by car_count

*/

------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

                                CHALLENGES


select brand , model , year from cars
 where sold is false 
 order by year asc
 limit 5

SELECT color, COUNT(color) AS car_colors
FROM cars
WHERE sold IS FALSE
GROUP BY color
HAVING COUNT(color) > 2
ORDER BY car_colors DESC

*/

--------------------------------------------------------------------------------------------------------

/*

                              MANIPULATING DATA 

Simply data manipulation commands ( dml ) or CRUD commands , these are 4 main commands for data manipulation

NOTE : these commands dont return data from the database , so these changes are applied inplace not on an duplicated db , so in general an Admin can only do these operations.

1. INSERT INTO 

INSERT INTO cars(
  brand , model , year , price , color , condition , sold
) values(
  'Porshce','944 Turbo' , 1989 , 49800 , 'white' , 4,FALSE
)

2. UPDATE EXISTING RECORDS

3. DELETE RECORDS

DELETE from cars 
   where sold is true
*/


  





