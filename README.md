# E-Commerce-Back-End

## Description 
Back end code for internet retail e-commerce site, for the largest sector of the electronics industry. The E-commerce platform provide a suite of services to businesses of all sizes, that uses the latest technologies
SO THAT all companies can compete with other e-commerce companies.


## How to
Getting Started
You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data. Use the schema.sql file in the db folder to create a database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

## Database Models
The database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`

    - Integer.
  
    - Doesn't allow null values.
  
    - Set as primary key.
  
    - Uses auto increment.

  * `category_name`
  
    - String.
  
    - Doesn't allow null values.

* `Product`

  * `id`
  
    - Integer.
  
    - Doesn't allow null values.
  
    - Set as primary key.
  
    - Uses auto increment.

  * `product_name`
  
    - String.
  
    - Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    - Integer.
  
    - Doesn't allow null values.
  
    - Set a default value of `10`.
  
    - Validates that the value is numeric.

  * `category_id`
  
    - Integer.
  
    - References the `Category` model's `id`.

* `Tag`

  * `id`
  
    - Integer.
  
    - Doesn't allow null values.
  
    - Set as primary key.
  
    - Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  * `product_id`

    - Integer.

    - References the `Product` model's `id`.

  * `tag_id`

    - Integer.

    - References the `Tag` model's `id`. 

The schema.sql file in the db `"tags"` folder to create database with MySQL shell commands
  
!["Use the schema.sql file in the db tags folder to create database with MySQL shell commands."](./assets/tags.png)

The schema.sql file in the db `"products"` folder to create database with MySQL shell commands
![Use the schema.sql file in the db products folder to create database with MySQL shell commands.](./assets/products.png)

The schema.sql file in the db `"categories"` folder to create database with MySQL shell commands
![Use the schema.sql file in the db categories folder to create database with MySQL shell commands.](./assets/categories.png)

Postman Tests `"tags"`
![In Postman, tests “GET tags”.](./assets/postman_tags.png)

Postman Tests `"Products"`
![In Postman, tests “GET Products”.](./assets/postman_products.png)

Postman Tests `"Categories"`
![In Postman, tests “Categories”.](./assets/postman_categories.png)

### Walkthrough Video:

https://user-images.githubusercontent.com/79549867/120586160-00101f00-c401-11eb-9a94-76a2762ccbd7.mov

---

Copyright (c) 2021 Robert Howell


---

## Author Info
- GitHub - [Robert Howell](https://github.com/lpnrhowell)
- Email - [lnprhowell@gmail.com]()
