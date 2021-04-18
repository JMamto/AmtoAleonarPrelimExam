const pool = require("./db");

const sql = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
const data = ['shirt', 50];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();