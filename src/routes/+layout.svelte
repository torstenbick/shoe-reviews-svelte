<script>
    import './styles.css'
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="page">
<header class="fixed top-4 left-4">
         <NavBar />
    </header>
   <main>

       <slot />
   </main>

</div>

<style>
main{
    flex-grow: 1;
}
.page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

</style>