const { createClient } = supabase

const supabaseUrl = "https://wdpfxnvhkyjfcvfvmjpt.supabase.co"
const supabaseKey = "sb_publishable_Rv9FEq22N2CpG2ccq5gQhg_LPtx5eYV"

const client = createClient(supabaseUrl, supabaseKey)


// Signup
async function signup(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

const { data, error } = await client.auth.signUp({
email: email,
password: password
})

if(error){
alert(error.message)
}else{
alert("Signup successful")
window.location="login.html"
}

}


// Login
async function login(){

let email=document.getElementById("login_email").value
let password=document.getElementById("login_password").value

const { data, error } = await client.auth.signInWithPassword({
email: email,
password: password
})

if(error){
alert(error.message)
}else{
alert("Login successful")
window.location="dashboard.html"
}

}


// Logout
async function logout(){

await client.auth.signOut()
window.location="login.html"

}
