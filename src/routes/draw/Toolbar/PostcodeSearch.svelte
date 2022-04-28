<script>
 import { Button , Grid, Column, Row,Search } from "carbon-components-svelte";
 import {mapobject} from '../mapstore.js';

</script>



<main>
<div>
    <Row>
      
      <Search
      closeButtonLabelText="Clear search input"
      defaultValue=""
      autocomplete='on'
      id="search-1"
      labelText="Postcode Search"
      onChange={function (x){
        console.log(x);
        $mapobject.setCenter(x);
      }}
      onKeyDown={function noRefCheck(x){return [1,2,3]}}
      size="sm"
      style="max-width:100px"
      />
         </Row>
         <Row>
            <Column>.</Column>
         </Row>

        </div>
</main>

<style>

</style>