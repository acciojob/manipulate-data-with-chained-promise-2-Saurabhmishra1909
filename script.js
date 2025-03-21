function Array(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	}).then((array)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const evn=array.filter(num=>num%2===0);
				document.getElementById('output').innerText=evn.join(',');
				resolve(evn);
			},1000);
		});
	}).then((evn)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const proX2=evn.map(num=>num*2);
				document.getElementById('output').innerText=proX2.join(',');
				resolve(proX2);
			},2000);
		});
	});
	Array();
}