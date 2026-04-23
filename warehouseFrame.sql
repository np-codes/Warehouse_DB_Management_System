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


-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------
-- ---------------------------- Inserting Dummy Data --------------------------------------------
-- -------------------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------------------

-- PRODUCT
INSERT INTO PRODUCT VALUES
(1, 'Laptop', 1200.00),
(2, 'Phone', 800.00),
(3, 'Tablet', 500.00),
(4, 'Headphones', 150.00),
(5, 'Monitor', 300.00);

-- SUPPLIER
INSERT INTO SUPPLIER VALUES
(1, 'TechSupply Co.', '123 Tech St', 'Atlanta', 'GA', '30301'),
(2, 'GadgetWorld', '456 Gadget Ave', 'Charlotte', 'NC', '28202'),
(3, 'DeviceHub', '789 Device Blvd', 'Columbia', 'SC', '29201');

-- SUPPLIER_PHONE
INSERT INTO SUPPLIER_PHONE VALUES
(1, '111-111-1111'),
(1, '111-222-3333'),
(2, '222-222-2222'),
(3, '333-333-3333');

-- DEPARTMENT
INSERT INTO DEPARTMENT VALUES
(1, 'Electronics'),
(2, 'Storage'),
(3, 'Logistics'),
(4, 'Quality Control');


-- ---------------------------
INSERT INTO WAREHOUSE VALUES
(1, '100 Main St', 'Augusta', 'GA', '30901', 5000, NULL),
(2, '200 Broad St', 'Columbia', 'SC', '29201', 3000, NULL),
(3, '300 King St', 'Charlotte', 'NC', '28202', 4000, NULL);

-- -------------------------
INSERT INTO WAREHOUSE_DEPARTMENT (warehouse_id, department_id, employee_count, manager_id) VALUES
(1, 1, 10, NULL),
(1, 2, 8, NULL),
(2, 3, 12, NULL),
(2, 4, 6, NULL),
(3, 1, 9, NULL);

-- -------------------------------
INSERT INTO EMPLOYEE 
(fname, lname, salary, doj, street, city, state, zip_code, position, warehouse_dept_id)
VALUES
('Will', 'Boot', 45000, '2020-02-10', '22 Birch St', 'Charlotte', 'NC', '30807', 'Supervisor', 2),
('John', 'Doe', 60000, '2022-01-15', '12 Elm St', 'Augusta', 'GA', '30901', 'Manager', 1),
('Jane', 'Smith', 55000, '2021-03-20', '34 Oak St', 'Augusta', 'GA', '30901', 'Supervisor', 2),
('Mike', 'Brown', 50000, '2020-07-10', '56 Pine St', 'Columbia', 'SC', '29201', 'Manager', 3),
('Emily', 'Davis', 48000, '2023-05-01', '78 Cedar St', 'Columbia', 'SC', '29201', 'Supervisor', 4),
('Chris', 'Wilson', 62000, '2019-11-11', '90 Maple St', 'Charlotte', 'NC', '28202', 'Manager', 5),
('Anna', 'Taylor', 45000, '2022-08-08', '22 Birch St', 'Charlotte', 'NC', '28202', 'Staff', 5);

-- -------------------------------
UPDATE WAREHOUSE_DEPARTMENT SET manager_id = 1000000 WHERE warehouse_dept_id = 1;
UPDATE WAREHOUSE_DEPARTMENT SET manager_id = 1000001 WHERE warehouse_dept_id = 2;
UPDATE WAREHOUSE_DEPARTMENT SET manager_id = 1000002 WHERE warehouse_dept_id = 3;
UPDATE WAREHOUSE_DEPARTMENT SET manager_id = 1000003 WHERE warehouse_dept_id = 4;
UPDATE WAREHOUSE_DEPARTMENT SET manager_id = 1000004 WHERE warehouse_dept_id = 5;

-- ---------------------------------------
UPDATE WAREHOUSE SET head_id = 1000000 WHERE warehouse_id = 1;
UPDATE WAREHOUSE SET head_id = 1000002 WHERE warehouse_id = 2;
UPDATE WAREHOUSE SET head_id = 1000004 WHERE warehouse_id = 3;

-- -------------------------------------
INSERT INTO INVENTORY VALUES
(1, 1, 1, 50),
(2, 2, 1, 100),
(3, 3, 2, 75),
(4, 4, 2, 200),
(5, 5, 3, 60),
(6, 1, 3, 40);

-- -----------------------------------------
INSERT INTO ORDERS VALUES
(1, 1, 20),
(1, 2, 30),
(2, 3, 15),
(2, 4, 25),
(3, 5, 10);