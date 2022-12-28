eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    '2 d="#E";2 e=1.5(".e");2 3=1.5(".d");2 8=j;2 b=1.5(".b");3;b.A("C",()=>{2 i=3.m;f(d==i){8=y}o{8=j}f(8){b.4.z="u";2 6=1.x("a");6.n("w","../v/r.t");6.n("s","6");6.l="k";e.q(6);1.B("7").h="🎊 Баяр хүргье та амжилтай давлаа 🎉 🙌🏻!!! "+"<F>"+\'<9 4= " R-Z: Y;">k дарж үргэлжлүүлнэ үү<9>\';1.5("X").4.c="W(0, 0, 0, 0.V);";1.5(".7").4.c="U(T, S, Q)"}o{3.4.c="G";3.m="";3.g="P!!!!";1.5("#7").l="💩 ";2 p=O(()=>{1.5("#7").h=\'<9 4="N: #M">Ногоон.L() </9>\'+"олоорой!";3.4.c="K";3.g="J I d ";H(p)},D)}});',
    62,
    62,
    "|document|let|input|style|querySelector|nextBtn|tip|output|span||btn|backgroundColor|password|form|if|placeholder|innerHTML|inputValue|false|Next|innerText|value|setAttribute|else|stop|appendChild|index|class|html|none|qrlogin|href|createElement|true|display|addEventListener|getElementById|click|1000|31d62|br|red|clearInterval|your|Enter|black|pop|31d622|color|setInterval|wrong|34|font|214|49|rgb|468|rgba|main|14px|size".split(
      "|"
    ),
    0,
    {}
  )
);
