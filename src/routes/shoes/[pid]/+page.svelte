<script>
    export let data = {
        props: {
            shoe: null
        }
    };
</script>

<section class="content">
    {#if data.props.shoe}
        <div class="shoe-info-card">
            <div class="shoe-display">
            <h1 class="name">{data.props.shoe.name}</h1>
            <img src={data.props.shoe.img} alt={data.props.shoe.name} width="400" height="400" />
<!--            <img scr={data.props.shoe.brandLogo} alt={data.props.shoe.brand} width="400" height="400" />-->
                <div class="shoe-buy">
                    <h2 class="review-title">Purchase</h2>
                    <div>

                    
                <button>
                    <a href={data.props.shoe.link}>
                <img class="img-hov"src="https://media.licdn.com/dms/image/C4E0BAQHBmWI9w3tzog/company-logo_200_200/0/1544572615288?e=2147483647&v=beta&t=HhwAog-YBLZyc1ULuVv48MZefPUw3EHejmW25OtMwUQ" alt="running warehouse" width="100" height="100"/>
                </a>
                </button>
                <button>
                  <a href={data.props.shoe.brandLink}>
                    <img class="img-hov"src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="nike" width="100" height="100" />
                </a>
                 </button>
                </div>
                </div>
                </div>
                
            <div class="shoe-info">
                <div class="shoe-specs">
                    <div class="spec-section">
                        <p><span class="text">Brand:</span></p>
                        <p class="spec-info">{data.props.shoe.brand}</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Price:</span></p>
                            <p class="spec-info">${data.props.shoe.price}</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Best Use:</span> </p>
                            <p class="spec-info">{data.props.shoe.bestUse}</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Surface:</span> </p>
                            <p class="spec-info">{data.props.shoe.surface}</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Rating:</span> </p>
                            <p class="spec-info"><span class="stars">{data.props.shoe.rating}</span></p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Drop:</span> </p>
                            <p class="spec-info">{data.props.shoe.drop}mm</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text">Weight:</span> </p>
                            <p class="spec-info">{data.props.shoe.weight}g</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text"> Heel Stack Height:</span> </p>
                            <p class="spec-info">{data.props.shoe.heelStackHeight}mm</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text"> Forefoot Stack Height:</span> </p>
                            <p class="spec-info">{data.props.shoe.forefootStackHeight}mm</p>
                        </div>
                        <div class="spec-section">
                            <p><span class="text"> MidsolFoam:</span> </p>
                            <p class="spec-info">{data.props.shoe.foam}</p>
                        </div>

           
            </div>
                <div class="shoe-rewiew">
                    <h2 class="review-title">Review</h2>
                    <p class="review-text">{data.props.shoe.review}</p>
                </div>

            </div>

            </div>



    {:else}
        <p>Sorry, no shoe found</p>
    {/if}
</section>

<style>

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: center;
        margin-inline: 8.5rem;
        margin-block: 1rem;
    }

    .spec-section{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 5px;
    }
    .spec-info{
        font-weight: 700;
        font-size: 1.1rem;
    }

    .text{
        font-weight: 500;
        font-size: 1rem;
        
    }
    .review-title{
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;

    }
    .review-text{
       font-size: 1rem;
        font-weight: 500;
        text-align: center;
        line-height: 1.5;
    }
.shoe-info-card{
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100%;
    width: 80%;
    padding: 1rem;
    margin: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    border: #060c21 6px solid;
    min-width: fit-content;

}
.shoe-info{
    display: grid;
    grid-template-rows: 2fr 3fr;
    padding: 1rem;
    
    
}
.shoe-specs{
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
.name{
    background-color:  lightslategray;
    border-radius: 10px;
    /* border: #060c21 6px solid; */
    padding: 2px;
    width: 100%;
}

.shoe-buy{
    display: grid;
    justify-content: center;
    padding: 1rem;
    background-color:  lightslategray;
    border-radius: 10px;
    /* border: #060c21 6px solid; */
    margin: 1rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
}

.shoe-rewiew{
    
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 3fr;
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
.img-hov{
    display: block;
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 50%;

}
button{
    background-color: #fff;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

}
button:hover .img-hov{
  opacity: 0.2;
  
}

</style>