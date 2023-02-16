<script>
    export let data = {
        props: {
            shoe: null
        }
    };
</script>

<section>
    {#if data.props.shoe}
        <div class="shoe-info-card">
            <div class="shoe-display">
            <h1>{data.props.shoe.name}</h1>
            <img src={data.props.shoe.img} alt={data.props.shoe.name} width="400" height="400" />
<!--            <img scr={data.props.shoe.brandlogo} alt={data.props.shoe.brand} width="400" height="400" />-->
                <div class="shoe-buy">
                  <a href={data.props.shoe.link}>RunningWearhouse.com </a>
                </div>
                </div>
            <div class="shoe-info">
                <div class="shoe-specs">

            <p><span class="text">Brand:</span></p>
                <p>{data.props.shoe.brand}</p>
            <p><span class="text">Price:</span></p>
                <p>${data.props.shoe.price}</p>
            <p><span class="text">Best Use:</span> </p>
                <p>{data.props.shoe.bestUse}</p>
            <p><span class="text">Surface:</span> </p>
                <p>{data.props.shoe.surface}</p>
            <p><span class="text">Rating:</span> </p>
                <p><span class="stars">{data.props.shoe.rating}</span></p>
            <p><span class="text">Drop:</span> </p>
            <p>{data.props.shoe.drop}</p>
            <p><span class="text">Weight:</span> </p>
            <p>{data.props.shoe.weight}</p>
            <p><span class="text"> Heel Stack Height:</span> </p>
            <p>{data.props.shoe.heelStackHeight}</p>
            <p><span class="text"> Forefoot Stack Height:</span> </p>
            <p>{data.props.shoe.forefootStackHeight}</p>
            </div>
                <div class="shoe-rewiew">
                    <p><span class="text">Review:</span> </p>
                    <p>{data.props.shoe.review}</p>
                </div>

            </div>

            </div>



    {:else}
        <p>Sorry, no shoe found</p>
    {/if}
</section>

<style>
.shoe-info-card{
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100%;
    padding: 1rem;
    margin: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;

}
.shoe-specs{
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 1rem;
    padding: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;
    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
}

.shoe-display{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
}
h1{
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;
    padding: 2px;
    width: 100%;
}

.shoe-buy{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;
    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
}

.shoe-rewiew{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;
    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
}
</style>