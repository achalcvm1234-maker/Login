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
}

}
