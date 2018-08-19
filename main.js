/*function json(file,callback)
{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function()
	{
		if (xhr.readyState=="4" && xhr.status===200) 
		{
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	caree(d.career);
	ski(d.skills);
	ach(d.Achievements);
	desc(d.Description);
})*/
//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	caree(d.career);
	ski(d.skills);
	ach(d.Achievements);
	desc(d.Description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(CSE)
{
	var i=document.createElement("img");
	i.src=CSE.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=CSE.name;
	l.appendChild(nam);
	var n1=document.createElement("h3");
	n1.textContent=CSE.Email;
	l.appendChild(n1);
	var n2=document.createElement("h3");
	n2.textContent=CSE.Phone;
	l.appendChild(n2);
	var n3=document.createElement("h3");
	n3.textContent=CSE.Address;
	l.appendChild(n3);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(CS)
{
	var x=document.createElement("div");
	x.classList.add("edua");
	r.appendChild(x);
	var head=document.createElement("h2");
	head.textContent="Education:";
	x.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for (var i = CS.length- 1; i >= 0; i--) 
	
	{			
		var e=document.createElement("h3");
		e.textContent=CS[i].course;
		x.appendChild(e);
		var u=document.createElement("ul");
		x.appendChild(u);
		var list=document.createElement("li");
		list.textContent=CS[i].college;
		u.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=CS[i].CGPA;
		list.appendChild(list1);
	}
}
function ski(s)
{
	var d=document.createElement("div");
	d.textContent="skills:";
	r.appendChild(d);
	d.appendChild(document.createElement("HR"));
	var tab=document.createElement("table");
	var row=" ";
	for (var i=0; i<s.length; i++) 
	{
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function caree(C)
{
	var head=document.createElement("h2");
	head.textContent="Career Objective:";
	r.appendChild(head);
	head.appendChild(document.createElement("HR"));
	var o=document.createElement("h6");
	o.textContent=C.obj;
	head.appendChild(o);
	o.setAttribute("id","co");
}
function ach(A)
{
	var x=document.createElement("div");
	x.classList.add("achi");
	x.setAttribute("id","A");
	r.appendChild(x);
	var head=document.createElement("h2");
	head.textContent="Achievements:";
	x.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for( i in A)
	{
		var u=document.createElement("ul");
		u.setAttribute("id","xy");
		x.appendChild(u);
		var list=document.createElement("li");
		list.textContent=A[i];
		u.appendChild(list);
	}

}
function desc(D)
{
	var head=document.createElement("h2");
	head.textContent="Description:";
	r.appendChild(head);
	head.appendChild(document.createElement("HR"));
	var o=document.createElement("h6");
	o.textContent=D.des;
	head.appendChild(o);
	o.setAttribute("id","co");
}