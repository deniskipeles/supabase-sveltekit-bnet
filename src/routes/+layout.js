// import type { LayoutLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load = async (event) => {
  const { session } = await getSupabase(event)
  return { session }
}




// "devDependencies": {
//   "@popperjs/core": "^2.11.6",
//   "@sveltejs/adapter-auto": "next",
//   "@sveltejs/kit": "next",
//   "autoprefixer": "^10.4.13",
//   "classnames": "^2.3.2",
//   "flowbite": "^1.5.3",
//   "flowbite-svelte": "^0.27.14",
//   "postcss": "^8.4.19",
//   "svelte": "^3.44.0",
//   "svelte-preprocess": "^4.10.7",
//   "tailwindcss": "^3.2.3",
//   "vite": "^3.1.0"
// },


// cafeteria dependancies
//===========================
// "devDependencies": {
//   "@popperjs/core": "^2.11.6",
//   "@sveltejs/adapter-auto": "next",
//   "@sveltejs/kit": "next",
//   "autoprefixer": "^10.4.7",
//   "classnames": "^2.3.2",
//   "flowbite": "^1.5.1",
//   "flowbite-svelte": "^0.23.0",
//   "postcss": "^8.4.14",
//   "postcss-load-config": "^4.0.1",
//   "svelte": "^3.44.0",
//   "svelte-check": "^2.7.1",
//   "svelte-heros": "^2.3.3",
//   "svelte-preprocess": "^4.10.7",
//   "tailwindcss": "^3.1.5",
//   "typescript": "^4.7.4",
//   "vite": "^3.1.0"
// },