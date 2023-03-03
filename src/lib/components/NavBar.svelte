<script lang="ts">
    import NavBarContent from './NavBarContent.svelte';

    let open = false;

    const close = () => {
        open = false;
    };
</script>

<button
        class={`flex flex-col justify-between w-10 px-1 rounded-lg h-10 py-2 z-50 ${open && 'open'}`}
        id="nav-button"
        on:click={() => {
		open = !open;
	}}
>
    <span class="z-50 w-full h-1 bg-gray-800 rounded-full" />
    <span class="z-50 w-full h-1 bg-gray-800 rounded-full" />
    <span class="z-50 w-full h-1 bg-gray-800 rounded-full" />
</button>
<NavBarContent {open} {close} />

<style>
    button {
        background: rgba(227, 241, 241, 0.6);
    }
    span {
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
        background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        box-shadow: 0 0 6px -1px rgba(245, 245, 245, 0.5);
    }

    .open > span {
        box-shadow: none;
        background-color: white;
    }
    .open > span:nth-child(1) {
        transform: translateY(0.6rem) rotate(45deg);
    }

    .open > span:nth-child(2) {
        opacity: 0;
    }

    .open > span:nth-child(3) {
        transform: translateY(-0.6rem) rotate(-45deg);
    }
</style>