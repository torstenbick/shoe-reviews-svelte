import {shoes} from "$lib/scripts/shoes.js";
import {error} from "@sveltejs/kit";

export const load = ({params}) => {
    console.log('params.pid', params.pid)
    console.log('shoes', shoes)
    const shoe = shoes.find(shoe => shoe.id === params.pid)
    if (!shoe) {
        return error(404, 'Not found')
    }
    return {
        props: {
            shoe
        }
    }
}