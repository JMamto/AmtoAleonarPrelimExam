const pool = require("./db");

pool.query('select * from "PrelimExam"."AA_purchase_order"', (err, res) => {

    try{
        console.log(res.rows);
    }catch(err){
        console.error(err.message);
    }

});
pool.end();