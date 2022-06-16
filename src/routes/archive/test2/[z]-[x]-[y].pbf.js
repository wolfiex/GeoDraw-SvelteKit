// src/routes/cors_endpoint/[arguments].json.js


export async function get({ params }) {

    const { path } = params;

    console.error('testing2',path)
    return { body: [params], status: 200 };    
}




// /[org]/[repo]/tree/[branch]/[...file]
// ...in which case a request for /sveltejs/kit/tree/master/documentation/docs/01-routing.md would result in the following parameters being available to the page:

// {
//   org: 'sveltejs',
//   repo: 'kit',
//   branch: 'master',
//   file: 'documentation/docs/01-routing.md'
// }