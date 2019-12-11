$(document).ready(function() {
	$('.slideshow').cycle({
		fx: 'curtainX' //transition type
	});
});

function initMap() {
    var location = {lat: 44.820809, lng: 20.458707};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
        });
    var marker = new google.maps.Marker({
        position: location,
        icon: "images/logo-mini.png",
        map: map
        });
}


var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Vaš pretraživač ne podržava Geolokaciju.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var location = {lat: 44.820809, lng: 20.458707};
    var latlon = new google.maps.LatLng(lat, lon)
    var mapholder = document.getElementById('map')
    

    var myOptions = {
    center:location,
    zoom: 12,
    
    }

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
    	position:latlon,
    	icon: "images/map1.png",
    	map:map
    });
    var marker2 = new google.maps.Marker({
        position: location,
        icon: "images/logo-mini.png",
        map: map
        });

    
}



function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Korisniku odbijen zahtev za Geolokaciju."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Informacija o lokaciji nije dostupna."
            break;
        case error.TIMEOUT:
            x.innerHTML = "Zahtev za dobijanje lokacije korisnika je istekao."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Došlo je do nepoznate greške."
            break;
    }
}

function validacija() {

	if (document.forms[0].imePrezime.value=='') {
		alert("Niste uneli Vase ime i prezime!");
		document.forms[0].ime.focus();
		return false
	}
	if (document.forms[0].email.value=='') {
		alert("Niste uneli e-mail adresu!");
		document.forms[0].email.focus();
		return false;
	}
	if(document.forms[0].email.value.indexOf('@') == -1)
	{
		alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
		document.forms[0].email.focus();
		return false;
	}
	if (document.forms[0].poruka.value=='') {
		alert("Niste uneli poruku!");
		document.forms[0].poruka.focus();
		return false
	}
	


	return confirm("Ispravno ste uneli sve podatke, da li želite da nastavite?");
}


function Slideshow( element ) {
    this.el = document.querySelector( element );
    this.init();
}
    
    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector( ".slider-wrapper" );
            this.slides = this.el.querySelectorAll( ".slide" );
            this.previous = this.el.querySelector( ".slider-previous" );
            this.next = this.el.querySelector( ".slider-next" );
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;
            
            this.action();
            this.stopStart();   
        },
        _slideTo: function( slide ) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;
            
            for( var i = 0; i < this.slides.length; i++ ) {
                var slide = this.slides[i];
                if( slide !== currentSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if( self.index == self.slides.length ) {
                    self.index = 0;
                }
                self._slideTo( self.index );
                
            }, 3000);
        },

        stopStart: function() {
            var self = this;
            self.el.addEventListener( "mouseover", function() {
                clearInterval( self.timer );
                self.timer = null;
                
            }, false);
            self.el.addEventListener( "mouseout", function() {
                self.action();
                
            }, false);
        }
        
        
    };

    
    document.addEventListener( "DOMContentLoaded", function() {
        
        var slider = new Slideshow( "#main-slider" );
        google.maps.event.addDomListener(window, 'load', initialize);
    });



