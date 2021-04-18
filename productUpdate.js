const pool = require("./db");

const sql = 'update "PrelimExam"."AA_products" set product_name = $1 where product_id = 1 returning *';
const data = ['tshirt'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();