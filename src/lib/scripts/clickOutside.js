
export function clickOutside(node, opts) {

    const handleClick = (event) => {
        //Get the element based on the id we gave in the params
        const ignore = document.getElementById(opts.ignore);
        //Check that we're not clicking in the button.
        if (ignore?.contains(event.target)) return;

        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('click_outside', node));
        }
    };

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}