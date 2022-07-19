let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");
const sideBar = document.getElementById("sidebar");
const vendor = document.querySelector('.anim2');
const footer = document.querySelector('.footer').innerHTML;


/*javascript function for Toogle Menu starts here*/
function showMenu() {
    sideBar.style.left = "0";
    sideBar.style.transition = "0.7s";
}

function hideMenu() {
    sideBar.style.left = "-200px";
}




let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "header": {}
}
$.ajax(settings).done(function (response){
    bitcoin.innerHTML = response.bitcoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
});

