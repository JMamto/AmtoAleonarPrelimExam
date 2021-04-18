const pool = require("./db");

const sql = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
const data = ['ken', 'davao'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();