<script>
    import { shoes } from "$lib/scripts/shoes.js";
    import ShoeCard from "$lib/components/ShoeCard.svelte";
    import Controls from "$lib/components/Controls.svelte";

    let filteredShoes = shoes;

    const setFilteredShoes = (newShoes) => {
        filteredShoes = newShoes;
    };
</script>

<Controls {filteredShoes} {setFilteredShoes} />
<section class="shoes">
    <div class="product-container">
        {#each filteredShoes as shoe}
            <ShoeCard {shoe} />
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



