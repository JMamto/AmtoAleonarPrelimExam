const pool = require("./db");

(async () => {

    const client = await pool.connect();

    try {

        await client.query('BEGIN')


        const queryText = `select "AA_customer".customer_name as cust_name,
                                   "PrelimExam"."AA_supplier"."supplier_name" as supp_name,
                                   "PrelimExam"."AA_purchase_order"."purchase_order_date" as "Date",
                                   "PrelimExam"."AA_purchase_order"."purchase_order_address" as "Address"
                                   
                                   
                           from "PrelimExam"."AA_customer"
                           
                           join "PrelimExam"."AA_purchase_order" on
                                "PrelimExam"."AA_purchase_order"."purchase_order_customer_id" = "PrelimExam"."AA_customer"."customer_id"
                                
                           join "PrelimExam"."AA_supplier" on
                                "PrelimExam"."AA_purchase_order"."purchase_order_supplier_id" = "PrelimExam"."AA_supplier"."supplier_id"`

        const res = await client.query(queryText);

        res.rows.forEach(val =>
                console.log(`Customer: ${val.cust_name} \n Supplier: ${val.supp_name} \n Date: ${val.Date} \n Address: ${val.Address}`)
            )



        await client.query('COMMIT');
    } catch (e){
        await client.query('ROLLBACK');
        throw e;
    }finally{
        client.release();
    }
    
})().catch(e => console.error(e.stack));