// src/routes/cors_endpoint/[arguments].json.js

import { detach_dev } from "svelte/internal";


export async function get({ params }) {

    const { path } = params;

    console.error('testing',path,await fetch(`http://localhost:7113/4/7/4.pbf`))
    return { body: ["helloa",path], status: 200 };    
}





// /[org]/[repo]/tree/[branch]/[...file]
// ...in which case a request for /sveltejs/kit/tree/master/documentation/docs/01-routing.md would result in the following parameters being available to the page:

// {
//   org: 'sveltejs',
//   repo: 'kit',
//   branch: 'master',
//   file: 'documentation/docs/01-routing.md'
// }