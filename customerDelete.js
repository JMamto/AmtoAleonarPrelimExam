const pool = require("./db");

const sql = 'delete from "PrelimExam"."AA_customer" where "customer_id" = $1 returning *';
const data = [2];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();