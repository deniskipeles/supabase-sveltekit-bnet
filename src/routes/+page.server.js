import { supabase } from "$lib/supabase";


export async function load({params}) {
    let { data, error } = await supabase
    .from('deal_of_the_day')
    .select(`
      id,
      price_deal,
      shop_products (
        id,
        price,
        discount,
        shop(
            id,
            name,
            description
        ),
        product(
            id,
            name,
            description,
            photos
        )
      )
    `)
    return {
        data,
        error
    }
}
