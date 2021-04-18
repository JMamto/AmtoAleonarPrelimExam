const pool = require("./db");

const sql = 'update "PrelimExam"."AA_purchase_order" set purchase_order_date = $1 where purchase_order_id = 1 returning *';
const data = ['2020-06-20'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();