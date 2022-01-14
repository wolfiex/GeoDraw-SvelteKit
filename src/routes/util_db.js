

import initSqlJs from 'sql.js';

import * as dfd from 'danfojs';

let tables, populate;


export let SQL=undefined;

// var SQL, db, buf;


// Initialize funcitons
export async function init_db() {

    if (!SQL){
    const sqlPromise = initSqlJs({
        locateFile: (f) => `sql-wasm.wasm`
    });

    SQL = await sqlPromise;

    }
}


export async function load_db(path){
    if (!SQL) await init_db(); // Ensure we have started the SQL engine

    const buf = await fetch(`/DB/${path}`).then((res) => res.arrayBuffer());
    return new SQL.Database(new Uint8Array(buf));
}


export function query_db(db,query, nodf = false, print = true) {
    /// A function to get the tables from the database
        var data = db.exec(query)[0];
        console.warn(data)
        if (nodf) return data;
        var df = new dfd.DataFrame(data.values, { columns: data.columns });
        if (print) console.log(df.print());
        return df;
    }