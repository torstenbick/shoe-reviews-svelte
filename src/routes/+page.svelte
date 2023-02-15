<script>
import {shoes} from "$lib/scripts/shoes.js";
import ShoeCard from "./ShoeCard.svelte";
</script>

<section class="shoes">
    <h1>Shoes</h1>
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
}


</style>



