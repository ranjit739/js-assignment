const tipcalcy =() =>{
    let amount=document.getElementById("bii_amount").value;
    let perc= document.getElementById("tip_percent").value;
    let tip=amount*(perc/100)
    document.getElementById("tip_amount").value=tip;
    let total_billed=tip + Number(amount);
    document.getElementById("total_billed").value=total_billed;
}