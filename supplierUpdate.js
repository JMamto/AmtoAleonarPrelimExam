const pool = require("./db");

const sql = 'update "PrelimExam"."AA_supplier" set supplier_name = $1 where supplier_id = 1 returning *';
const data = ['penshoppe'];

pool.query(sql, data, (err, res) =>{

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();