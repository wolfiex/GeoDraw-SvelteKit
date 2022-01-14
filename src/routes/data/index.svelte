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

		const dataPromise = fetch(`/DB/${areatype}.sqlite`).then((res) => res.arrayBuffer());

		[SQL, buf] = await Promise.all([sqlPromise, dataPromise]);

		db = await new SQL.Database(new Uint8Array(buf));
		console.log('Database loaded', db);




		function getTables(query, nodf = false, print = true) {
		/// A function to get the tables from the database
		
		
			var data = db.exec(query)[0];

			console.warn(data)
			if (nodf) return data;

			var df = new dfd.DataFrame(data.values, { columns: data.columns });
			if (print) console.log(df.print());

			return df;
		}

		tables = await getTables(
			`
		SELECT name FROM sqlite_schema 
		WHERE type = 'table' 
		AND name NOT LIKE 'sqlite_%'
		ORDER BY 1;`,
			false
		);

		console.log(tables.$data);



		var selector = 'health'
		var df = await getTables(
			`
		SELECT DISTINCT GEOGRAPHY_CODE,NAME,OBS_VALUE FROM ${selector} JOIN  ${selector}_names GROUP BY GEOGRAPHY_CODE,NAME LIMIT 30`,
			false,false
		);

		console.log(df);






		function fill_table(df) {
			/// A function to get indvidual indicators 
			let headers = df.$columns.map((c) => ({
				value: c.replace('_', ' '),
				key: c
			}));

			let rows = df.$data.map((e,j) =>{
				var r = Object.assign.apply(
					{},df.$columns.map((v, i) => ({ [v]: e[i] }))
				)
				r['id'] = j;
				return r 
			}
			);

			populate = { headers, rows };

			console.log(populate);
		}

		await fill_table(df);

		console.log(tables);
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
