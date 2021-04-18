const pool = require("./db");

const sql = 'delete from "PrelimExam"."AA_purchase_order" where purchase_order_id = $1 returning *';
const data = [1];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();