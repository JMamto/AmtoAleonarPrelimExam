const pool = require("./db");

const sql = 'insert into "PrelimExam"."AA_line_item"(line_item_purchase_order_id, line_item_product_id, line_item_cost, line_item_status) values($1, $2, $3, $4) returning *';
const data = [2, 2, 500, 'processing'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();