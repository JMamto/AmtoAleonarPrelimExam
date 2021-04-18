const pool = require("./db");

const sql = 'insert into "PrelimExam"."AA_purchase_order"(purchase_order_customer_id, purchase_order_supplier_id, purchase_order_date, purchase_order_address) values($1, $2, $3, $4) returning *';
const data = [3, 2, '2020-06-12', 'matina'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();