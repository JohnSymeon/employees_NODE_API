# employees_NODE_API
An implementation of a NODE JS API with Express that communicates with and manipulates a local 
MySQL database with HTTP requests.

It also includes the code for initialising the database and the employees table.

The project's data consist of:

1) id : integer, automatically assigned

2) name: VARCHAR

3) department: VARCHAR

The following supporting softwere were used:

1) Xampp: to host and visualise the local MySQL database

2) Postman: to send HTTP requests and debug


The implemented CRUD operations are demonstrated below;



<h2>1) POST request: the employee's name and their occupation are added in JSON format as the body of the request</h2>

![POST](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/70bfc656-52ba-400d-8be1-d61a383195a3)

<h2>2) GET request: fetches all employees from the employee table</h2>

![GET all](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/55fa8523-36c9-4247-a239-252b83dd901a)

<h3>The local MySQL database</h3>

![database](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/ceeb8b93-8bed-4300-a026-94936154bc93)

<h2>3) PUT request: updates the department of an employee whose id must be specified in the URL, again with a JSON body</h2>

![PUT](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/65b03e51-dfee-4074-8054-f5e6572749a0)

<h3>the department of id:1 changes</h3>

![PUT result](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/14748405-32f6-45f5-b43f-eed05ec37c96)

<h2>4)DEL request: delete a row from the database depending on the id </h2>

![DEL](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/e3fe8f11-22e2-46eb-869d-67a58315e1ad)

<h3>The result reflected in the database</h3>

![DEL database](https://github.com/JohnSymeon/employees_NODE_API/assets/125981941/9808efd1-a82d-4222-be34-e77b81b27036)

