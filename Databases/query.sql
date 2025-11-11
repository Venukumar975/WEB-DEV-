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

*/






