function AddRating(e)
{var t=e.split("."),
i=new Array,
a=0;
for(a=0;5>a;a++)a<t[0]?i[a]=10:a==t[0]&&t[1]?i[a]=t[1]:i[a]=0;
for(var n="",d=0;5>d;d++)n+='<span class="badge_sprit str'+i[d]+'"></span>';
return n
  
}
var DOMAIN="https://www.justdial.com/",
getElembyId=document.getElementById("JdBadge"),
JDBContainer=document.getElementById("JdBadgeDest"),
imgval=docid=link=ds2=imgdiv="";
imgval=getElembyId.getAttribute("data-s1"),
ds2=getElembyId.getAttribute("data-s2"),
ds2=decodeURIComponent(window.atob(ds2)),
ds2=ds2.split("@@@"),
docid=ds2[1].replace(/[+]/g,"-"),
xhr=new XMLHttpRequest,
xhr.open("POST",DOMAIN+"JdWidget"),
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),
xhr.onload=function(){if(200===xhr.status){var e=JSON.parse(xhr.responseText),t=e.companyname.replace(/\s/g,"-",e.companyname).replace(/\'/g,"",e.companyname).replace(/\./g,"",e.companyname),
i=e.rating,a=e.review;
a=a>0?"("+a+" Rating)":"";
var n=e.disp_pic,
d=e.city.replace(/\s/g,"-",e.city),
o=e.area.replace(/\s/g,"-",e.area);
o=o?"-"+o:"";
var s=docid.replace(/[.]/g,"-");
if(link=DOMAIN+d+"/"+t+o+"/"+s+"_BZDET?utm=JDBadge","b1"==imgval)
{var r=AddRating(i);
imgdiv='<div style="height:35px;display:table-cell;margin:0 auto;background:#fff;"><span id="badge##b1"></span><span id="JDbdgrateTxt">'+i+'</span><span style="background: #fff;padding:8px 8px 4px; float:left;">'+r+"</span></div>"}
else if("b2"==imgval)
{var r=AddRating(i);
imgdiv='<div id="badge##b2"><div id="JDbdgtopList"><span style="color:#747474;">Trusted in </span><span id="JDbdglistedJDLogo"></span></div><div class="com_dets" style="position:absolute;bottom:0;"><span id="JDbdgbizName" class="com_name">'+e.companyname+'</span><div style="padding:0 10px;float:left;"><span id="JDbdgrateTxt">'+i+"</span>"+r+'</div><span id="JDbdgrcount" class="com_name">'+a+"</span></div></div>"}
else"b3"==imgval&&(imgdiv='<span id="badge##b3"></span>');var g='<div id="JDbadge_'+docid+'"><a href="'+link+'" target="_blank">'+imgdiv+"</a></div>";
if(JDBContainer.innerHTML=g,"b1"==imgval||"b2"==imgval){if("b1"==imgval){var p=document.getElementById("badge##b1");p.setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) #fff no-repeat;background-position:-67px -27px;display:inline-block;width: 38px;height: 35px;padding: 7px;float:left;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;")}
if("b2"==imgval)
{var l=document.getElementById("badge##b2");
l.setAttribute("style","background: url('"+n+"'); display:inline-block;text-align:center;width:300px;height:250px;margin:5px;position:relative;background-position: 50% 50% !important;box-shadow: inset 0 -74px 32px -11px rgba(0, 0, 0, 0.6);")}var m=document.getElementById("JDbdgrateTxt");m.setAttribute("style","background: #018C39; padding: 5px 14px; float:left;color:#fff; font-family:'Roboto',sans-serif; font-size:18px; line-height:1.4;");var c,b,x,u,h,y,f,k,v,w,j,A;for(b=document.getElementsByClassName("str0"),x=document.getElementsByClassName("str1"),u=document.getElementsByClassName("str2"),h=document.getElementsByClassName("str3"),y=document.getElementsByClassName("str4"),f=document.getElementsByClassName("str5"),k=document.getElementsByClassName("str6"),v=document.getElementsByClassName("str7"),w=document.getElementsByClassName("str8"),j=document.getElementsByClassName("str9"),A=document.getElementsByClassName("str10"),c=0;c<b.length;++c)b[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -348px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<x.length;++c)x[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -321px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<u.length;++c)u[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -294px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<h.length;++c)h[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -267px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<y.length;++c)y[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -241px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<f.length;++c)f[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -214px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<k.length;++c)k[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -188px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<v.length;++c)v[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -161px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<w.length;++c)w[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -136px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<j.length;++c)j[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -110px -289px; width: 17px; height:17px; margin:3px 0;");for(c=0;c<A.length;++c)A[c].setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display : inline-block; background-position: -83px -289px; width: 17px; height:17px; margin:3px 0")}else if("b3"==imgval){var B=document.getElementById("badge##b3");B.setAttribute("style","background: url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) #fff no-repeat;background-position:-63px -63px;border-radius:5px; display:inline-block;width: 59px;height: 59px;")}"b2"==imgval&&(document.getElementById("JDbdglistedJDLogo").setAttribute("style","background:url(//akam.cdn.jdmagicbox.com/images/icontent/jdrwd/badge-sprite.png) no-repeat; display:inline-block;background-position:-125px -42px;width:42px;height:10px;"),document.getElementById("JDbdgtopList").setAttribute("style","background: #fff;width: 44%;margin:5%;padding: 2%;border-radius: 3px;font-size: 13px;font-family:'Roboto', sans-serif;line-height:1.4"),document.getElementById("JDbdgrateTxt").setAttribute("style","float: left;background: #259107;color: #fff;padding: 2px 3px;border-radius: 3px;font-size: 12px;margin:1px 4px 0 0;"));var t=document.getElementsByClassName("com_name");for(c=0;c<t.length;++c)t[c].setAttribute("style","float: left;display: block;padding:5px 10px;width:90%;color: #fff;font-family:'Roboto',sans-serif;font-size:13px;line-height:1.4;")}else 200!==xhr.status&&alert("Something went wrong..  "+xhr.status)},xhr.send(encodeURI("docid="+docid+"&imgval="+imgval));