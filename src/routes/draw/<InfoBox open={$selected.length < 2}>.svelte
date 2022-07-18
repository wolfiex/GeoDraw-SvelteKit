<InfoBox open={$selected.length < 2}>
    {#if $draw_enabled}
      <ToastNotification
        style="width:100%"
        hideCloseButton
        kind="warning"
        title="Zoom in to begin drawing. "
        subtitle="The map needs to be at least on zoom level 9 to begin drawing. "
        caption=""
      />
    <!-- {:else if $draw_type === 'radius'}
      <ItemAccordion title="Draw Area" subtitle="Distance Selection Tool">
        <Slider
          ariaLabelInput="Radius Selection (km)"
          id="slider"
          labelText="Radius Selection (km)"
          max={30}
          min={0.2}
          step={0.2}
          stepMuliplier={4}
          value={5}
          on:change={function (value) {
            console.log('slider value', value.detail);
            $radiusInKm = value.detail;
          }}
        />

        <p>
          Move the slider below to select the radius you are interested in, and
          then click to select an area.
        </p>
        <br />
      </ItemAccordion> -->
    <!-- {:else if $draw_type === 'click'}
      <ItemAccordion title="Draw Area" subtitle="Click Selection">
        <p>Click on any areas you are interested in.</p>
      </ItemAccordion>
    {:else if $draw_type === 'poly'}
      <ItemAccordion title="Draw Area" subtitle="Polygon Selection">
        <p>
          Click on each corner of the shape you want to build, and then back
          onto the first vertex to select.
        </p>
      </ItemAccordion> -->
    <!-- {/if}-->

    {#await $query then value}
      {#if value.error != null}
        <ToastNotification
          style="width:100%"
          hideCloseButton
          kind="error"
          subtitle={value.error_title}
          caption={value.error}
        /> 
      {:else if value.oa}
        <ItemAccordion title="" subtitle="Compressed Selection">
          <small>
            <b> MSOA: </b> <span>{value.properties.msoa.length}</span> <br />
            <b> LSOA: </b> <span>{value.properties.lsoa.length}</span> <br />
            <b> OA: </b> <span>{value.properties.oa.length}</span> <br />
            parent tile: {value.properties.tile}; # original output areas {value
              .properties.original}
          </small>
        </ItemAccordion>
      {/if}
    {/await}
  </InfoBox>