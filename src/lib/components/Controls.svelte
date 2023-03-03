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
            return shoe.bestUse === filter;
        });
        setFilteredShoes(filteredShoes);
    };
    
</script>

<section class="controls">
    <div class="controls__inner">
        <label for="bestUse">Best Use</label>
        <select name="surface" id="bestUse" class="text-black" on:change={filter}>
            <option value="all">All</option>
            <option value="Road">Road</option>
            <option value="Trail">Trail</option>
            <option value="track">Track</option>
<!--            <option value="soccer">Soccer</option>-->
<!--            <option value="hiking">Hiking</option>-->
        </select>
    </div>  

    </section>

