/*
    This script implements the basic CRUD HTTP functions GET, POST, PUT, DELETE
    with Node JS and Express for a local MySQL database.

    It also contains a database creation and a table creation method.
    The demonstration port is '1234'.
*/
const express = require('express');
const mysql = require('mysql')
const app = express();
const PORT = 1234;

app.listen(PORT, 
    ()=>console.log('server is working')
)
app.use(express.json())

//Create a connection to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'CompanyDb'
})

db.connect(err=>{
    if(err){
        throw err
    }
    console.log('mysql successfully connected')
});


//Create the database
app.get('/createdb',(req,res)=>{
    let sql = 'CREATE DATABASE CompanyDb'
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('Database created')
    })
})

//Create employee table
app.get('/new_employee_table',(req,res)=>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(20), department VARCHAR(50), PRIMARY KEY(id))'
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('Employee table creation success')
    })
})

//CRUD functions
//Create an employee
app.post('/addemployee', (req,res)=>{
    const { name } = req.body;
    const { department } = req.body;

    let post = {name: name, department: department}
    let sql = `INSERT INTO employee SET ?`
    let query = db.query(sql,post,err=>{
        if(err)
            throw err
        res.send('Employee added successfully')
    })
})

//Fetch all employees
app.get('/getemployees',(req,res)=>{
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql, (err,results)=>{
        if(err){
            throw err
        }
        res.send(results)
    })
})

//Update an employee's department
app.put('/update_employee/:id',(req,res)=>{
    const {id} = req.params;
    const { department } = req.body;

    let sql = `UPDATE employee SET department = '${department}' WHERE id = ${id}`
    let query = db.query(sql,err=>{
        if(err)
            throw err
        res.send('Employee department changed successfully')
    })
})

//Delete an employee
app.delete('/delete_employee/:id',(req,res)=>{
    const {id} = req.params;

    let sql = `DELETE FROM employee WHERE id = '${id}'`
    let query = db.query(sql,err=>{
        if(err)
            throw err
        res.send('Employee deleted successfully')
    })
})
