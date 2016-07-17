jQuery(document).ready(function($){
 var url = window.location; // get current URL
 $('.nav-pills>li>a[href="'+url+'"]').addClass('active'); // add class of 'active' to selected links matching current url
});







