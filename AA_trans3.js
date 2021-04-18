const pool = require("./db");

(async () => {

    const client = await pool.connect();

    try {

        await client.query('BEGIN')


        let isCancelled = true;

        if(isCancelled){

            const queryText = 'update "PrelimExam"."AA_line_item" set line_item_status = $1 where line_item_product_id = 2';
            const dataQuery =['cancelled'];
            await client.query(queryText, dataQuery)
        }

        await client.query('COMMIT');
    } catch (e){
        await client.query('ROLLBACK');
        throw e;
    }finally{
        client.release();
    }
    
})().catch(e => console.error(e.stack));