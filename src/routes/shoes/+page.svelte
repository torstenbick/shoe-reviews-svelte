<script>
import {shoes} from "$lib/scripts/shoes.js";
import ShoeCard from "$lib/components/ShoeCard.svelte";

let filteredShoes = shoes;

const filterSelection = (c) => {
    if(c === 'all') {
        filteredShoes = shoes;
        return;
    }
    console.log(c);
    filteredShoes = shoes.filter((shoe) => shoe.surface.toLowerCase().includes(c.toLowerCase()));
}

</script>

<div class="filter-shoes">
    <div id="myBtnContainer">
        <button class="btn active" on:click={() => filterSelection('all')}> Show all</button>
        <button class="btn" on:click={() => filterSelection('trail')}> Trail</button>
        <button class="btn" on:click={() => filterSelection('road')}> Road</button>
        <button class="btn" on:click={() => filterSelection('track')}> Track</button>
      </div>
</div>

<section class="shoes">
    <div class="product-container">
    {#each filteredShoes as shoe}
    <ShoeCard shoe={shoe}/>
    {/each}
    </div>

</section>

<style>
.product-container{
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.btn{
    border: none;
    outline: none;
    padding: 12px 16px;
    background-color: lightslategray;
    cursor: pointer;
}
.filter-shoes{
    display: flex;
    justify-content: center;
    padding-top: 2rem;
}
</style>



