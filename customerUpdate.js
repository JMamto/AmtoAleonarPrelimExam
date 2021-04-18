const pool = require("./db");

const sql = 'update "PrelimExam"."AA_customer" set "customer_name" = $1 where "customer_id" = 2 returning *';
const data = ['alex'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();