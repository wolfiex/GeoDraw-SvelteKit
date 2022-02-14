<script>

    // data list
    export var data = {
        // firstall:undefined,
        // secondall:undefined,
        first: { a: Math.random()*129, b: 21, c: 19, d: 6, e: 9, f: 6 },
        second: { a: 57, b: 13, c: 8, d: 2, e: 17, f: 3 },
    };

    //half size tables
    export var small = ['first']
    export var title = ['first']
    export var figtitle = ''






    function total(x) {
        return Object.values(x).reduce((total, amount) => total + amount);
    }

    // lets get totals

    var totals = Object.keys(data).reduce((totals, key) => {
        totals[key] = total(data[key]);
        return totals;
    }, {});



    var keys = [...new Set( Object.values(data).reduce(
        (keys, obj) => keys.concat(Object.keys(obj)),
        []
    ))]

    console.log(keys, totals);
</script>


<h1> {figtitle} </h1>
<figure>
    <div class="y-axis">
        <!-- <h3>Y-Axis Title</h3> -->
    </div>

    <div class="graphic">
        {#each Object.keys(data) as k}
        <!-- <br> -->
            <div class="row" >
                {#if title.includes(k)}
                <span style='font-size:10px'>-  {k}</span>
                {/if}

                {#each keys as category}
                    {#if data[k][category] > 0}
                        <span
                            class="block"
                            title={category}
                            style="width:{95 *
                                (data[k][category] / totals[k])}%;
                                height:{small.includes(k)?20:40}px!important;"
                        >
                            <!-- <span class="value">{data[k][category]}%</span> -->
                        </span>
                    {/if}
                    
                {/each}

            </div>
            {#if !title.includes(k)}
            <br><br>
            {/if}
        {/each}
    </div>

    <div class="x-axis">
        <!-- <h3>X-Axis Title</h3> -->
        <ul class="legend">
            {#each keys as category}
                <li>
                    {category}
                </li>
            {/each}
        </ul>
    </div>
</figure>

<style>
    body {
        background-color: #272b34;
        font-family: "Khula", sans-serif;
        font-weight: 300;
        color: white;
        line-height: 1em;
        padding: 2em;
        max-width: 600px;
    }
    figure{max-width: 600px;}
    h1{font-size: 2em;}

    h3,
    h6 {
        margin: 0;
        line-height: 1em;
    }
    h3 {
        margin-bottom: 1em;
    }
    h6 {
        font-size: .9em;
        padding: 0 0 0em;
        color: #919191;
    }
    figure {
        margin: 0 auto;
        max-width: 1100px;
        position: relative;
    }
    .graphic {
        padding-left: 30px;
    }
    .row {
        margin-bottom: 1.5em;
    }
    @keyframes expand {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
    @media screen and (min-width: 768px) {
        @keyframes expand {
            from {
                width: 0%;
            }
            to {
                width: calc(100% - 75px);
            }
        }
    }
    .chart {
        overflow: hidden;
        width: 0%;
        animation: expand 1.5s ease forwards;
    }
    .row + .row .chart {
        animation-delay: 0.2s;
    }
    .row + .row + .row .chart {
        animation-delay: 0.4s;
    }
    .block {
        display: block;
        height: 100px;
        color: #fff;
        font-size: 0.75em;
        float: left;
        background-color: #334d5c;
        position: relative;
        overflow: hidden;
        opacity: 1;
        transition: opacity, 0.3s ease;
        cursor: pointer;
    }
    .block:nth-of-type(2),
    .legend li:nth-of-type(2):before {
        background-color: #45b29d;
    }
    .block:nth-of-type(3),
    .legend li:nth-of-type(3):before {
        background-color: #efc94c;
    }
    .block:nth-of-type(4),
    .legend li:nth-of-type(4):before {
        background-color: #e27a3f;
    }
    .block:nth-of-type(5),
    .legend li:nth-of-type(5):before {
        background-color: #df5a49;
    }
    .block:nth-of-type(6),
    .legend li:nth-of-type(6):before {
        background-color: #962d3e;
    }
    .block:hover {
        opacity: 0.65;
    }
    .value {
        display: block;
        line-height: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
    }
    .x-axis {
        text-align: center;
        padding: 0.5em 0 2em;
    }
    .y-axis {
        height: 20px;
        transform: translate(-32px, 170px) rotate(270deg);
        position: absolute;
        left: 0;
    }
    .legend {
        margin: 0 auto;
        padding: 0;
        font-size: 0.9em;
    }
    .legend li {
        display: inline-block;
        padding: 0.25em 1em;
        line-height: 1em;
    }
    .legend li:before {
        content: "";
        margin-right: 0.5em;
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #334d5c;
    }
    @media screen and (min-width: 768px) {
        /* h6 {
            padding: 0;
            width: 75px;
            float: left;
            line-height: 10px;
        } */
        .block {
            font-size: 1em;
        }
        .legend {
            width: 50%;
        }
    }
</style>
