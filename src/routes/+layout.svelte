<script>
    import './styles.css'
</script>

<div>
    <header>
        <div class="header">
            <div class="logo">
                <h2 class="title">Torsten's</h2>
                <h1 class="title">Running Reviews</h1>
            </div>
        
            <div class="nav">
                <a class="nav-button" href="/">Home</a>
                <a class="nav-button" href="/shoes">Shoes</a>
                <a class="nav-button" href="/gear">Gear</a>
                <a class="nav-button" href="/other">Other</a>
            </div>
        </div>

    </header>
   <main>
       <slot />
   </main>
   <footer>
       <p>© 2021 Torsten's Running Reviews</p>
       <!-- <a href="https://icons8.com/icon/83761/home-page">Home Page</a> icon by <a href="https://icons8.com">Icons8</a> -->
    </footer>
</div>

<style>


</style>