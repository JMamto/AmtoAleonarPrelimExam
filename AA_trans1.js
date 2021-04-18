const pool = require("./db");

(async () => {

    const client = await pool.connect();

    try {

        await client.query('BEGIN');

        const queryText = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
        const dataQuery = ['alfonso', 'USA'];
        await client.query(queryText, dataQuery)

        const queryText1 = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
        const dataQuery1 = ['ling', 'china town'];
        await client.query(queryText1, dataQuery1)

        const queryText2 = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
        const dataQuery2 = ['Gibrel', 'marikina'];
        await client.query(queryText2, dataQuery2)

        const queryText3 = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
        const dataQuery3 = ['johnson', 'merika'];
        await client.query(queryText3, dataQuery3)

        const queryText4 = 'insert into "PrelimExam"."AA_customer"(customer_name, customer_address) values($1, $2) returning *';
        const dataQuery4 = ['joy', 'quibek'];
        await client.query(queryText4, dataQuery4)


        const queryText5 = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
        const dataQuery5 = ['jogging pants', 50];
        await client.query(queryText5, dataQuery5)

        const queryText6 = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
        const dataQuery6 = ['socks', 50];
        await client.query(queryText6, dataQuery6)

        const queryText7 = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
        const dataQuery7 = ['hoodies', 50];
        await client.query(queryText7, dataQuery7)

        const queryText8 = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
        const dataQuery8 = ['shorts', 50];
        await client.query(queryText8, dataQuery8)

        const queryText9 = 'insert into "PrelimExam"."AA_products"(product_name, product_quantity) values($1, $2) returning *';
        const dataQuery9 = ['hats', 50];
        await client.query(queryText9, dataQuery9)



        const queryText10 = 'insert into "PrelimExam"."AA_supplier"(supplier_name, supplier_address) values($1, $2) returning *';
        const dataQuery10 = ['bobson', 'lanang'];
        await client.query(queryText10, dataQuery10)

        const queryText11 = 'insert into "PrelimExam"."AA_supplier"(supplier_name, supplier_address) values($1, $2) returning *';
        const dataQuery11 = ['frank', 'townsville'];
        await client.query(queryText11, dataQuery11)

        const queryText12 = 'insert into "PrelimExam"."AA_supplier"(supplier_name, supplier_address) values($1, $2) returning *';
        const dataQuery12 = ['martina', 'san pedro'];
        await client.query(queryText12, dataQuery12)

        const queryText13 = 'insert into "PrelimExam"."AA_supplier"(supplier_name, supplier_address) values($1, $2) returning *';
        const dataQuery13 = ['mark', 'santiago'];
        await client.query(queryText13, dataQuery13)

        const queryText14 = 'insert into "PrelimExam"."AA_supplier"(supplier_name, supplier_address) values($1, $2) returning *';
        const dataQuery14 = ['ken', 'matina'];
        await client.query(queryText14, dataQuery14)

        await client.query('COMMIT');
    } catch (e){
        await client.query('ROLLBACK');
        throw e;
    }finally{
        client.release();
    }
    
})().catch(e => console.error(e.stack));