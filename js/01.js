var dem = 0;
function menu(){
	dem++;
	var a = document.getElementsByClassName('mn');
	if(dem%2!=0){
		for(var i=0;i<a.length;i++){
			a[i].style.display='block';
		}
		document.getElementById('trienlam').style.marginTop='250px';
	}else{
		for(var i=0;i<a.length;i++){
			a[i].style.display='none';
			document.getElementById('trienlam').style.marginTop='0px';
		}
	}
}