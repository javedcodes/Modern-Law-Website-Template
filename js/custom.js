function scollevent(){
	var getheaderelement = document.getElementsByTagName('header')[0].classList;
	if(document.documentElement.scrollTop > 100){
		getheaderelement.add('fixed');
	}else{
		getheaderelement.remove('fixed');
	}
}
window.onscroll = scollevent;