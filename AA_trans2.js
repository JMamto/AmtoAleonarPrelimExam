const pool = require("./db");

(async () => {

    const client = await pool.connect();

    try {

        const queryText = `insert into "PrelimExam"."AA_purchase_order"(purchase_order_customer_id, 
                                                                        purchase_order_supplier_id, 
                                                                        purchase_order_date, 
                                                                        purchase_order_address) 
                            values($1, $2, $3, $4) returning purchase_order_id`;

        const dataQuery = [3, 2, '2021-04-17', 'maa'];
        const id = await client.query(queryText, dataQuery)
        
        const queryText1 = `insert into "PrelimExam"."AA_line_item"(line_item_purchase_order_id,
                                                                    line_item_product_id,
                                                                    line_item_cost,
                                                                    line_item_status)
                                values($1, $2, $3, $4) returning *`
        
        const dataQuery1 = [id.rows[0].purchase_order_id, 2, 499, 'processing'];
        await client.query(queryText1, dataQuery1);

        
            //========


        const queryText2 = `insert into "PrelimExam"."AA_purchase_order"(purchase_order_customer_id, 
            purchase_order_supplier_id, 
            purchase_order_date, 
            purchase_order_address) 
            values($1, $2, $3, $4) returning purchase_order_id`;

        const dataQuery2 = [3, 2, '2021-04-17', 'maa'];
        const id1 = await client.query(queryText2, dataQuery2)

        const queryText3 = `insert into "PrelimExam"."AA_line_item"(line_item_purchase_order_id,
            line_item_product_id,
            line_item_cost,
            line_item_status)
            values($1, $2, $3, $4) returning *`

        const dataQuery3 = [id1.rows[0].purchase_order_id, 2, 499, 'processing'];
        await client.query(queryText3, dataQuery3);


            //==================



        const queryText4 = `insert into "PrelimExam"."AA_purchase_order"(purchase_order_customer_id, 
            purchase_order_supplier_id, 
            purchase_order_date, 
            purchase_order_address) 
            values($1, $2, $3, $4) returning purchase_order_id`;

        const dataQuery4 = [3, 2, '2021-04-17', 'maa'];
        const id3 = await client.query(queryText4, dataQuery4)

        const queryText5 = `insert into "PrelimExam"."AA_line_item"(line_item_purchase_order_id,
            line_item_product_id,
            line_item_cost,
            line_item_status)
            values($1, $2, $3, $4) returning *`

        const dataQuery5 = [id3.rows[0].purchase_order_id, 2, 499, 'processing'];
        await client.query(queryText5, dataQuery5);

        await client.query('COMMIT');
    } catch (e){
        await client.query('ROLLBACK');
        throw e;
    }finally{
        client.release();
    }
    
})().catch(e => console.error(e.stack));