var orderInfo = function(){
	var self=this;
	var errorvalue=false;
	var errorList="";


	this.init=function(){
		this.render();
	}

	this.render=function(){
		var arr=[];
		arr.push('<div style="width: 50%; float:left">');
		arr.push('	<img src="../images/mug.jpg" height="400px",width="100px" alt="mug">');
		arr.push('</div>');
		arr.push('<div style="width: 50%; float:right">');
		arr.push('	<div style="width: 80%; float:left">');
		arr.push('		<font>Siri&apos;s Homemade</font>');
		arr.push('		<h3>Home made cup 200 ml</h3>');
		arr.push('		<b>&#8377;150</b>&nbsp;&nbsp;<strike>&#8377;300</strike>&nbsp;&nbsp;<font style="color:brown">50% off</font>');
		arr.push('		<img src=""></img>');
		arr.push('	</div>');
		arr.push('	<div style="width: 20%; float:right">');
		arr.push('		<img src="../images/share.png"></img>&nbsp;&nbsp;Share');
		arr.push('	</div>');
		arr.push('</div>');
		arr.push('</table');
		$('#studentTable').html(arr.join(''));


	}
}
