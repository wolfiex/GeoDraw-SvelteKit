

import initSqlJs from 'sql.js';

import * as dfd from 'danfojs';
import { detach_before_dev } from 'svelte/internal';

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
    var db =  new SQL.Database(new Uint8Array(buf));

    // console.log('exxeecc',db.exec('SELECT * FROM geography LIMIT 1'));
    return db;
}


export function query_db(db,query, nodf = false, print = true) {
    /// A function to get the tables from the database
        var data = db.exec(query)[0];
        console.warn(query,data)
        if (nodf) return data;
        var df = new dfd.DataFrame(data.values, { columns: data.columns });
        if (print) console.log(df.print());
        return df;
    }




export function blob32 (blob) {
    return new Float32Array(blob[0].buffer)
}

const chunk = (arr) =>
  Array.from({ length: Math.ceil(arr.length / 2) }, (v, i) =>
    arr.slice(i * 2, i * 2 + 2)
  );


export function multiquery(query,table,dbs) {
    return dbs.map(d=>`${query} ${d}.${table}`).join(' UNION ALL ')
}

function featurify(res){
    var g = new Float32Array(res[1].buffer);
    return { "type": "Feature", "properties": { "id": ''+res[0]}, "geometry": { "type": "Polygon", "coordinates": [chunk(Array.from(g))] }}

}

export function geojsn (db,areas){

    var results = db.exec(multiquery(`SELECT GEOGRAPHY_CODE,geography FROM`,'geography',areas))[0]
    console.log(results)
    
    var geom = results.values.map(featurify)


    // { "type": "Feature", "properties": { "OBJECTID": 1, "CTYUA20CD": "E06000001", "CTYUA20NM": "Hartlepool", "CTYUA20NMW": " ", "BNG_E": 447160, "BNG_N": 531474, "LONG": -1.27018, "LAT": 54.67614, "Shape__Area": 93770202.650405899, "Shape__Length": 68482.701052606702 }, "geometry": { "type": "Polygon", "coordinates": [ 

    var geojson = {
        "type": "FeatureCollection",
        "name": "Selcted_Areas",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": geom}

    console.log(geojson)

    return geojson;
}


