-- CREATE SCHEMA `warehouse_schema` ;

-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------
-- ---------------------------- CREATING TABLES --------------------------------------------
-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------
CREATE TABLE WAREHOUSE(
  	warehouse_id INT PRIMARY KEY,
  	street VARCHAR(100),
  	city VARCHAR(50),
  	state CHAR(2),
	zip_code CHAR(5),
	capacity INT,
  	head_id INT
);

CREATE TABLE PRODUCT(
  	product_id INT PRIMARY KEY,
  	name VARCHAR(100),
  	price DECIMAL(10,2)
	);

CREATE TABLE INVENTORY(
 	inventory_id INT PRIMARY KEY,
	product_id INT,
  	warehouse_id INT,
  	quantity INT,
 	UNIQUE (product_id, warehouse_id)
	);

CREATE TABLE SUPPLIER(
  	supplier_id INT PRIMARY KEY,
  	name VARCHAR(100),
  	street VARCHAR(100),
  	city VARCHAR(50),
  	state CHAR(2),
  	zip_code CHAR(5)
	);
    
CREATE TABLE SUPPLIER_PHONE(
  	supplier_id INT,
  	phone VARCHAR(15),
    PRIMARY KEY ( supplier_id, phone )
	);

CREATE TABLE ORDERS(
  	supplier_id INT,
  	product_id INT,
    PRIMARY KEY ( supplier_id, product_id ),
  	quantity INT
	);

CREATE TABLE DEPARTMENT(
	department_id INT PRIMARY KEY UNIQUE,
    department_name VARCHAR(100)
	);
    
CREATE TABLE WAREHOUSE_DEPARTMENT(
	 warehouse_dept_id INT AUTO_INCREMENT PRIMARY KEY,
  	 warehouse_id INT,
	 department_id INT,
 	 employee_count INT,
     manager_id INT
     );

CREATE TABLE EMPLOYEE (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    salary DECIMAL(10 , 2 ),
    doj DATE,
    street VARCHAR(100),
    city VARCHAR(50),
    state CHAR(2),
    zip_code CHAR(5),
    position varchar(50),
    warehouse_dept_id INT
)  AUTO_INCREMENT=1000000;

-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------
-- ---------------------------- ADDING CONSTRAINS --------------------------------------------
-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------

-- WAREHOUSE table constraints ---------------------------------------------------------
ALTER TABLE warehouse
ADD CONSTRAINT fk_warehouse_employee
FOREIGN KEY (head_id) REFERENCES EMPLOYEE(employee_id);

-- INVENTORY table constraints constraints ---------------------------------------------------------
ALTER TABLE INVENTORY
ADD CONSTRAINT fk_inventory_product
FOREIGN KEY (product_id) REFERENCES PRODUCT(product_id);

ALTER TABLE INVENTORY
ADD CONSTRAINT fk_inventory_warehouse
FOREIGN KEY (warehouse_id) REFERENCES WAREHOUSE(warehouse_id);

-- WAREHOUSE_DEPARTMENT table constraints ---------------------------------------------------------
ALTER TABLE WAREHOUSE_DEPARTMENT
ADD CONSTRAINT fk_warehouse_department_employee
FOREIGN KEY (manager_id) REFERENCES EMPLOYEE(employee_id);

ALTER TABLE WAREHOUSE_DEPARTMENT
ADD CONSTRAINT fk_warehouse_department_warehouse
FOREIGN KEY (warehouse_id) REFERENCES WAREHOUSE(warehouse_id);

ALTER TABLE WAREHOUSE_DEPARTMENT
ADD CONSTRAINT fk_warehouse_department_department
FOREIGN KEY (department_id) REFERENCES DEPARTMENT(department_id);

-- EMPLOYEE table constraint ---------------------------------------------------------
ALTER TABLE EMPLOYEE
ADD CONSTRAINT fk_employee_WAREHOUSE_DEPARTMENT
FOREIGN KEY (warehouse_dept_id) REFERENCES WAREHOUSE_DEPARTMENT(warehouse_dept_id);

-- ORDERS table constraint ---------------------------------------------------------
ALTER TABLE ORDERS
ADD CONSTRAINT fk_orders_supplier
FOREIGN KEY (supplier_id) REFERENCES SUPPLIER(supplier_id);

ALTER TABLE ORDERS
ADD CONSTRAINT fk_orders_product
FOREIGN KEY (product_id) REFERENCES PRODUCT(product_id);

-- SUPPLIER_PHONE table constraint ---------------------------------------------------------
ALTER TABLE SUPPLIER_PHONE
ADD CONSTRAINT fk_supplierphone_supplier
FOREIGN KEY (supplier_id) REFERENCES SUPPLIER(supplier_id);



