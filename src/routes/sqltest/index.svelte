<script>
	/// IMPORTS
	import { onMount } from 'svelte';

	import { get } from 'svelte/store';
	import 'carbon-components-svelte/css/white.css';

	import { InlineLoading, DataTable ,Dropdown} from 'carbon-components-svelte';

	import initSqlJs from 'sql.js';

	import * as dfd from 'danfojs';

	let tables, populate;

	console.log('danfo', dfd);
	/// VARIABLES

	var SQL, db, buf;
	console.log('hi');

	// Initialize funcitons
	async function init() {
		// console.clear()
		const areatype = localStorage.getItem('areatype');
		if (!areatype) alert('Please select an area type from the Intro Tab');
		console.log(areatype);

		const sqlPromise = initSqlJs({
			locateFile: (file) => `/sql-wasm.wasm`
		});

		const dataPromise = fetch(`/DB/mydb.db`).then((res) => res.arrayBuffer());
		const secondaryPromise = fetch(`/DB/${areatype}.sqlite`).then((res) => res.arrayBuffer());

		[SQL, buf] = await Promise.all([sqlPromise, dataPromise]);


		var db1 = await new SQL.Database(new Uint8Array(buf));

		var db2 = await new SQL.Database(new Uint8Array(await secondaryPromise));



		console.log('Database loaded', db1,db1.filename);

		var db3 = db1.exec('ATTACH '+db2.filename+' AS secondary')
		console.log('----------',db3);

		await getTables(db2,
			`
		SELECT name FROM sqlite_schema 
		WHERE type = 'table' 
		AND name NOT LIKE 'sqlite_%'
		ORDER BY 1;`,
			false
		);

		var tables3 = await getTables( db1,
			`
		SELECT name FROM sqlite_schema 
		WHERE type = 'table' 
		AND name NOT LIKE 'sqlite_%'
		ORDER BY 1;`,
			false
		);


	
		// var tables31 = await getTables( db3,
		// 	`
		// SELECT name FROM sqlite_schema 
		// WHERE type = 'table' 
		// AND name NOT LIKE 'sqlite_%'
		// ORDER BY 1;`,
		// 	false
		// );


		console.log(db1.exec('SELECT * FROM secondary.age ')[0]);



		function getTables(db , query, nodf = false, print = true) {
		/// A function to get the tables from the database
		
		
			var data = db.exec(query)[0];

			console.warn(data,db)
			if (nodf) return data;

			var df = new dfd.DataFrame(data.values, { columns: data.columns });
			if (print) console.log(df.print());

			return df;
		}


		// console.log(tables.$data);



    // Create two databases
    var db1 = new SQL.Database();
    var db2 = new SQL.Database();
    var db3 = new SQL.Database();

    // Populate db1
    db1.exec("CREATE TABLE users (username,city);");
    db1.exec("INSERT INTO users VALUES ('alice','San Francisco');");
    db1.exec("INSERT INTO users VALUES ('bob',  'New York');");
    db1.exec("INSERT INTO users VALUES ('eve',  'Denver');");
    var result = db1.exec("SELECT name FROM sqlite_master WHERE type='table'");
	console.log(result[0].values);

    // Populate db2
    db2.exec("CREATE TABLE cities (city,state);");
    db2.exec("INSERT INTO cities VALUES ('San Francisco','CA');");
    db2.exec("INSERT INTO cities VALUES ('New York','NY');");
    db2.exec("INSERT INTO cities VALUES ('Denver','CO');");
    result = db2.exec("SELECT name FROM sqlite_master WHERE type='table'");
	console.log(result[0].values);

    // Attach dbs
    db3.run("ATTACH "+db1.filename+" as db1");
    db3.run("ATTACH "+db2.filename+" as db2");

    // Verify with a join
    result = db3.exec("SELECT username, city, state FROM db1.users NATURAL JOIN db2.cities;");
    console.log(result[0].values);

	
	db3.run("INSERT INTO db1.users SELECT * FROM db1.users");
	result = db3.exec("SELECT username, city, state FROM db1.users NATURAL JOIN db2.cities;");
    console.log(result[0].values);









		async function mergeBuffer(buffer1, buffer2) {
			var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
			tmp.set(new Uint8Array(buffer1), 0);
			tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
			return tmp;
			};





		///// end init
	}
	onMount(init);
</script>

<main>
	{#if !tables}
		<InlineLoading description="Loading tables..." />
	{/if}

	{#if tables}
	<Dropdown
  titleText="Contact"
  selectedIndex={0}
  items={tables.$data.map((e) => ({
	text: e[0].toUpperCase().replace('_', ' '),
	id: e[0]
  }))}
/>
{/if}

	{#if populate}
	<br><br>
		<DataTable zebra headers={populate.headers} rows={populate.rows}>
			<strong slot="title">Health Results</strong>
			<span slot="description" style="font-size: 1rem"> All the Health Categories </span>
		</DataTable>
	{/if}
</main>

<style lang="scss">
</style>
