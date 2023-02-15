<script>
    export let data = {
        props: {
            shoe: null
        }
    };
</script>

<section>
    {#if data.props.shoe}
        <h1>{data.props.shoe.name}</h1>
        <p><span class="text">Price:</span>${data.props.shoe.price}</p>
        <p><span class="text">Best Use:</span> {data.props.shoe.bestUse}</p>
        <p><span class="text">Surface:</span> {data.props.shoe.surface}</p>
        <p><span class="text">Rating:</span> <span class="stars">{data.props.shoe.rating}</span></p>

    {:else}
        <p>Sorry, no shoe found</p>
    {/if}
</section>

<style>

</style>