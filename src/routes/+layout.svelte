<script>
	import Footer from '$lib/components/Footer.svelte';
  import { supabase } from '$lib/supabase'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import "../app.css";
  // import "flowbite/dist/flowbite.css";
  import NavBar from '$lib/components/NavBar.svelte';
  // import SideBar from '$lib/components/SideBar.svelte';
  // import './styles.css'

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>



<!-- <div class="container" style="padding: 50px 0 100px 0"> -->
<div>
  <NavBar />
  <!-- <SideBar/> -->
  <slot />
  <Footer/>
</div>
