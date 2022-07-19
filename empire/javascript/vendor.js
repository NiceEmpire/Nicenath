let sideBar = document.getElementById("sidebar");
let vendor = document.querySelector('.vendor');

/*javascript function for Toogle Menu starts here*/
function showMenu() {
    if(sideBar.style.left = "-200px") {
     sideBar.style.left = "0";
     vendor.style.marginLeft = '170px';
     sideBar.style.transition = "0.7s";
     vendor.style.transition = "0.7s";
    }
    
}

function hideMenu() {
    sideBar.style.left = "-200px";
    sideBar.style.transition = "0.7s";
    vendor.style.marginLeft = '0px';
    vendor.style.transition = "0.7s";
}
/* stop here */


