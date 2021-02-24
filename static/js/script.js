// vanilla JavaScript for MaterializeCSS initialization
document.addEventListener('DOMContentLoaded', function () {
    let sidenavs = document.querySelectorAll(".sidenav");
    let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
});

// Collapsible initialization
 $(document).ready(function(){
    $('.collapsible').collapsible();
});

// Tooltips initialization
 $(document).ready(function(){
    $('.tooltipped').tooltip();
});
