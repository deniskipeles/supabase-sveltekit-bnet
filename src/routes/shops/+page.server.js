import { supabase } from "$lib/supabase";


export async function load({params}) {
    let { data, error } = await supabase
    .from('shops')
    .select(`
      id,
      name,
      description,
      photos
    `)
    return {
        data,
        error
    }
}
