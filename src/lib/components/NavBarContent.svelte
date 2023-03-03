<script lang="ts">

    import { clickOutside } from '$lib/scripts/clickOutside.js';

    export let open;
    export let close;



</script>

<div
        class={`fixed top-0 bottom-0 left-0 text-white text-xl text-center bg-gray-500 overflow-hidden ${
		open ? 'w-1/3 sm:w-1/4 lg:w-1/8' : 'w-0'
	}`}
        id="nav-bar"
        use:clickOutside={{ ignore: 'nav-button' }}
        on:click_outside={close}
>
    <nav class="flex flex-col items-center w-full h-full gap-4 p-4">
        <a href="/" on:click={close}>Home</a>
        <span class="w-3/4 mx-auto border-b border-white" />
        <a href="/shoes" on:click={close}>Shoes</a>
        <span class="w-3/4 mx-auto border-b border-white" />
        <a href="/gear" on:click={close}>Gear</a>
        <span class="w-3/4 mx-auto border-b border-white" />
        <a href="/other" on:click={close}>Other</a>
    </nav>
</div>

<style>
    div {
        transition: width 0.3s ease-in-out;
    }
</style>