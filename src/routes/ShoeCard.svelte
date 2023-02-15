<script>
    export let shoe;

</script>

<section class="shoe-card">
    <div class="shoe-card__inner">
        <a href="/shoes/{shoe.id}">
        <!--    <h1>Running Shoes</h1>-->
        <div class="shoe">
            <div>
                <h2 class="shoeblockTitle">{shoe.name}</h2>
                <img src={shoe.img} alt="vaporfly" height="300" width="300">
            </div>
            <span class="line" />


            <div class="card-content">
                <p><span class="text">Price:</span> ${shoe.price}</p>
                <p><span class="text">Best Use:</span> {shoe.bestUse}</p>
                <p><span class="text">Surface:</span> {shoe.surface}</p>
                <p><span class="text">Rating:</span> <span class="stars">{shoe.rating}</span></p>
            </div>
        </div>
        </a>
    </div>
</section>


<style>
    .shoe-card{
        background-color: lightslategray;
        width: 500px;
        border-radius: 10px;
        border: #060c21 6px solid;
        /*color: #060c21;*/
        color: white;

    }

    a{
        /*color: #060c21;*/
        text-decoration: none;
    }

    .shoe-card__inner{
        margin: 20px;
        display: flex;
        justify-content: center;
    }

    .card-content{
        max-width: fit-content;
        margin: 0 auto;
        display: flex;


    }
    .line{
        height: 0;
        width: 100%;
        border-top: 6px solid #060c21;
        box-sizing: content-box;
        display: block;
    }
    img{

    }
</style>