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
    '5 9="W";5 d=1.2(".d");5 3=1.2(".9");5 c=t;5 b=1.2(".b");3;b.C("x",()=>{5 j=3.l;o(9==j){c=w}k{c=t}o(c){b.4.v="E";5 7=1.y("a");7.u("z","../A/B.D");7.u("G","7");7.f="s";d.P(7);1.V("6").U="Баяр хүргье та амжилтай давлаа !!! "+"<T>"+\'<i 4= " S-R: Q;">s дарж үргэлжлүүлнэ үү<i>\';1.2("O").4.8="q(0, 0, 0, 0.H);";1.2(".6").4.8="r(p, m, n)"}k{3.4.8="g";3.l="";3.h="N!!!!";1.2(".6").4.8="g";1.2("#6").f="Зөв бич л дээ!!!!!";M(()=>{1.2(".6").4.8="q(e, e, e, 0.L)";1.2("#6").f="K хүртэлх тэгш тооны нийлбэрийг ол!";3.4.8="r(p, m, n)";3.h="J I 9: "},F)}});',
    59,
    59,
    "|document|querySelector|input|style|let|tip|nextBtn|backgroundColor|password||btn|output|form|209|innerText|red|placeholder|span|inputValue|else|value|214|34|if|49|rgba|rgb|Next|false|setAttribute|display|true|click|createElement|href|Tuulai|index|addEventListener|html|none|1500|class|468|your|Enter|1000|812|setInterval|wrong|main|appendChild|14px|size|font|br|innerHTML|getElementById|250500".split(
      "|"
    ),
    0,
    {}
  )
);
