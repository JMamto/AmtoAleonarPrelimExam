const pool = require("./db");

(async () => {

    const client = await pool.connect();

    try {

        await client.query('BEGIN')


        const queryText = 'update "PrelimExam"."AA_supplier" set supplier_address = $1 where supplier_id = 6 returning *';
        const dataQuery = ['Rizal Park'];
        await client.query(queryText, dataQuery)

        await client.query('COMMIT');
    } catch (e){
        await client.query('ROLLBACK');
        throw e;
    }finally{
        client.release();
    }
    
})().catch(e => console.error(e.stack));