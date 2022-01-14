

import initSqlJs from 'sql.js';

import * as dfd from 'danfojs';

let tables, populate;


export let SQL=undefined;


// var SQL, db, buf;
console.log('hi');

// Initialize funcitons
async function init() {
    // console.clear()
    // const areatype = localStorage.getItem('areatype');
    // if (!areatype) alert('Please select an area type from the Intro Tab');
    // [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);

    // db = await new SQL.Database(new Uint8Array(buf));
    // console.log('Database loaded', db);e.log(areatype);

    const sqlPromise = initSqlJs({
        locateFile: (file) => `/sql-wasm.wasm`
    });

    SQL = await sqlPromise;

    // const dataPromise = fetch(`/DB/${areatype}.sqlite`).then((res) => res.arrayBuffer());

}



