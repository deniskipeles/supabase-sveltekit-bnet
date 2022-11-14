
<script>
import {supabase} from "$lib/supabase.js";
import {goto}  from "$app/navigation"

let email = '';
let password = '';

    const signUp = async () => {
    let { data: user, error } = await supabase.auth.signUp({
        email,
        password
    })
    if(user){
        goto("/login",{replaceState:true})
    }
    console.log(user)
    console.log("error",error)
    }
</script>
    
    
    
    
<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</svelte:head>
    
    
    
<div>
    <div class="container">
        <form on:submit|preventDefault={signUp}>
        <div class="row">
            <h2 style="text-align:center">Sign up with Social Media or Email</h2>
            <div class="vl">
            <span class="vl-innertext">or</span>
            </div>
    
            <div class="col">
            <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw"></i> Sign up with Facebook
                </a>
            <a href="#" class="twitter btn">
                <i class="fa fa-twitter fa-fw"></i> Sign up with Twitter
            </a>
            <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                </i> Sign up with Google+
            </a>
            </div>
    
            <div class="col">
            <div class="hide-md-lg">
                <p>Or Sign up with email:</p>
            </div>
    
            <input bind:value={email} type="email" id="email" placeholder="Enter email" name="email" required>
            <input bind:value={password} type="password" id="password" name="password" placeholder="Password" required>
            <input type="submit" value="Sign up">
            </div>
            
        </div>
        </form>
    </div>
</div>   

<div class="bottom-container">
    <div class="row">
    <div class="col">
        <a href="/login" style="color:white" class="btn">Login</a>
    </div>
    <div class="col">
        <a href="/password-reset" style="color:white" class="btn">Forgot password?</a>
    </div>
    </div>
</div>

    

<style>
    .container {
        font-family: Arial, Helvetica, sans-serif;
    }
    
    * {
        box-sizing: border-box;
    }
    
    /* style the container */
    .container {
        position: relative;
        border-radius: 5px;
        /* background-color: #f2f2f2; */
        padding: 20px 0 30px 0;
    } 
    
    /* style inputs and link buttons */
    input,
    .btn {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 4px;
        margin: 5px 0;
        opacity: 0.85;
        display: inline-block;
        font-size: 17px;
        line-height: 20px;
        text-decoration: none; /* remove underline from anchors */
    }
    
    input:hover,
    .btn:hover {
      opacity: 1;
    }
    input,p{
      color: rgb(31, 29, 29);
    }
    
    /* add appropriate colors to fb, twitter and google buttons */
    .fb {
        background-color: #3B5998;
        color: white;
    }
    
    .twitter {
        background-color: #55ACEE;
        color: white;
    }
    
    .google {
        background-color: #dd4b39;
        color: white;
    }
    
    /* style the submit button */
    input[type=submit] {
        background-color: #04AA6D;
        color: white;
        cursor: pointer;
    }
    
    input[type=submit]:hover {
        background-color: #45a049;
    }
    
    /* Two-column layout */
    .col {
        float: left;
        width: 50%;
        margin: auto;
        padding: 0 50px;
        margin-top: 6px;
    }
    
    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    
    /* vertical line */
    .vl {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        border: 2px solid #ddd;
        height: 175px;
    }
    
    /* text inside the vertical line */
    .vl-innertext {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 8px 10px;
    }
    
    /* hide some text on medium and large screens */
    .hide-md-lg {
        display: none;
    }
    
    /* bottom container */
    .bottom-container {
        text-align: center;
        background-color: #666;
        border-radius: 0px 0px 4px 4px;
    }
    
    /* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 650px) {
        .col {
        width: 100%;
        margin-top: 0;
        }
        /* hide the vertical line */
        .vl {
        display: none;
        }
        /* show the hidden text on small screens */
        .hide-md-lg {
        display: block;
        text-align: center;
        }
    }
    </style>