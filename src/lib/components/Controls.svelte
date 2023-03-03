<script>
    import { shoes } from "$lib/scripts/shoes.js";
    
    export let filteredShoes = shoes;
    export let setFilteredShoes = () => {};

    const filter = (e) => {
        const filter = e.target.value;
        if(filter == 'all') {
            setFilteredShoes(shoes)
            return
        }
        const filteredShoes = shoes.filter((shoe) => {
            return shoe.surface === filter;
        });
        setFilteredShoes(filteredShoes);
    };
    
</script>

<section class="controls">
    <div class="controls__inner">
        <label for="surface">Filter by Surface</label>
        <select name="surface" id="surface" class="text-black" on:change={filter}>
            <option value="all">All</option>
            <option value="Road">Road</option>
            <option value="Trail">Trail</option>
            <option value="Track">Track</option>
<!--            <option value="soccer">Soccer</option>-->
<!--            <option value="hiking">Hiking</option>-->
        </select>
    </div>  

    </section>

<style>
    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 1rem;
        background-color: #243354;
    }
    .controls__inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1200px;
    }
    .controls__inner label {
        margin-right: 1rem;
    }
    .controls__inner select {
        padding: 0.5rem;
        border: 1px solid slategray;
        border-radius: 4px;
        background: slategray;
        color: white;

    }
</style>