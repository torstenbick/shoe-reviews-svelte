<script>
    export let shoe;

</script>

<section class="shoe-card">
    <div class="shoe-card__inner">
        <a href="/shoes/{shoe.id}">
        <!--    <h1>Running Shoes</h1>-->
        <div class="shoe">
            <div class="card-content-inner-inner">
                <h2 class="shoeblockTitle">{shoe.name}</h2>
                <img src={shoe.img} alt="vaporfly" height="300" width="300">
            </div>
            <span class="line" />


            <div class="card-content">
                <div>
                    <p><span class="text2">Price:</span> </p>
                    <p class="info"> ${shoe.price}</p>
                </div>

                <div>
                    <p><span class="text2">Best Use:</span> </p>
                    <p class="info"> {shoe.bestUse}</p>
                </div>

                <div>
                    <p><span class="text2">Surface:</span> </p>
                    <p class="info">   {shoe.surface}</p>
                </div>

                <div>
                    <p><span class="text2">Rating:</span> </p>
                    <p class="info">   <span class="stars">{shoe.rating}</span></p>
                </div>

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
        width: 100%;
    }

    .shoe-card__inner{
        margin: 20px;
        display: flex;
        align-items: center;
    }

    .card-content{
        /*max-width: fit-content;*/
        display: flex;
        justify-content: space-evenly;
        width: 100%;





    }
    .line{
        height: 0;
        width: 100%;
        border-top: 4px solid #060c21;
        box-sizing: content-box;
        display: block;
        padding-bottom: 1rem;
    }
    .card-content-inner-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    img{
        width: 100%;
        object-fit: cover;
    }
    .text2{
        font-weight: bold;
        font-size: .8rem;
    }
    .info{
        font-size: 1.2rem;
        margin: 0;

    }

</style>