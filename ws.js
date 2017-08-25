var count = 0;
function openContent(c) {
	c.style.opacity = "0";
	c.style.zIndex = "-1";
	//document.getElementById("intro").style.opacity = "0";
	//document.getElementById("intro").style.zIndex = "-1";
	document.getElementById("mainBody").style.width = "auto";
	
	document.getElementById("mainBody").style.display = "block";
	document.getElementById("sideBars").click();
	
}

function showContent(blockID) {
	if(blockID != "all"){
		document.getElementById(blockID).style.width = "100%";
		document.getElementById(blockID).style.opacity = "1";
		document.getElementById(blockID).scrollIntoView(true);
		window.scrollBy(0, -40);
	}
	else {
		var clsName = document.getElementsByClassName("blocks");
		var clsLength = clsName.length;
		for(var k=0;k<clsLength;k++) {
			clsName[k].style.width = "auto";
			clsName[k].style.opacity = "1";
		}
		window.scrollTo(0,0);
		document.getElementById("jobAssignment1").click();
		document.getElementById("dataSourcing1").click();
		document.getElementById("dataCollection1").click();
		document.getElementById("dataSelection1").click();
		document.getElementById("dataAnalysis1").click();
		document.getElementById("processingUnit1").click();
		document.getElementById("shadowUnit1").click();
		document.getElementById("trackingAndSearching1").click();
		document.getElementById("backups1").click();
		document.getElementById("additionalReport1").click();
		document.getElementById("completionData1").click();
		document.getElementById("reportingStatus1").click();
		document.getElementById("mediumUsed1").click();
	}
}

function openSideNav(m) {
	m.classList.toggle("change");
	if( count == 0){
		count = 1;
		document.getElementById("mainBody").style.marginLeft = "210px";
		document.getElementById("sidebar").style.width = "195px";
		document.getElementById("sidebar").style.border = "2px solid gray";
		document.getElementById("sidebar").style.overflowY = "auto";
		document.getElementById("sideTopBar").style.width = "205px";
		m.style.marginLeft = "205px";
		//document.getElementById("topBar").style.width = "1005px";
	}
	else {
		count = 0;
		document.getElementById("mainBody").style.marginLeft = "0px";
		document.getElementById("sidebar").style.width = "0px";
		document.getElementById("sidebar").style.border = "none";
		document.getElementById("sidebar").style.overflowY = "hidden";
		document.getElementById("sideTopBar").style.width = "0px";
		m.style.marginLeft = "0px";
		//document.getElementById("topBar").style.width = "1260px";
	}
	
}

function toggleVisibility(idName) {
		if(idName.length > 15) {
				var x = document.getElementsByClassName(idName);
				var i, j;
				var counter1 = 1;
				var counter2 = 1;
				var l = x.length;
				for(i=0;i<l;i++) {
						if(x[i].style.display == 'none') {
								counter1++;
								if(counter1 == l) {
									for(j=0;j<l;j++){
										x[j].style.display = 'inline-block';
										
													}
												}
														}
						else if(x[i].style.display == 'inline-block') {
								counter2++;
								if(counter2 == l) {
									for(j=0;j<l;j++){
										x[j].style.display = 'none';
													}
												}
														}
								}
									}
				
		else {
			var x = document.getElementById(idName);
			var y = x.className;
			var a = y.split(" ");
			var b = ["containPara", a[1]];
			var c = b.join("");
			if(x.style.display == 'none') {
				x.style.display = 'inline-block';
				if(a[0] == 'flowChart'){
					document.getElementById(c).style.display= 'inline-block';
					/*var w = document.getElementsByClassName('floating');
					var lenFloat = w.length;
					for(var r; r<lenFloat; r++){
						w[r].style.width = 'auto';
					}*/
				}
			}
			else {
				x.style.display = 'none';
				if(a[0] == "flowChart"){
					document.getElementById(c).style.display= 'none';
					/*var w = document.getElementsByClassName('floating');
					var lenFloat = w.length;
					for(var r; r<lenFloat; r++){
						w[r].style.width = '0';
					}*/
				}
			}
		}
}