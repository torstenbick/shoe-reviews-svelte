<script>
import {shoes} from "$lib/scripts/shoes.js";
import ShoeCard from "./ShoeCard.svelte";

let filteredShoes = shoes;

const filterSelection = (c) => {
    let x, i;
    x = document.getElementsByClassName("product-container");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
</script>

<div class="filter-shoes">
    <div id="myBtnContainer">
        <button class="btn active" onclick="filterSelection('all')"> Show all</button>
        <button class="btn" onclick="filterSelection('tail')"> Trail</button>
        <button class="btn" onclick="filterSelection('road')"> Road</button>
        <button class="btn" onclick="filterSelection('track')"> Track</button>
      </div>
</div>

<section class="shoes">
    <div class="product-container">
    {#each shoes as shoe}
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



