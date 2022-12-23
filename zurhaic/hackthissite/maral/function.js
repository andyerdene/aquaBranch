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
    '1 i=7+8*9;1 c=i%8;1 e=c*4;1 j=e/2-2;1 v=3.5(".v");1 6=3.5(".z");1 g=s;1 h=3.5(".h");6;h.M("L",()=>{1 t=6.o;r(j==t){g=J}l{g=s}r(g){h.a.m="C";1 n=(3.5(".n").a.m="E-D");3.N("b").u="Баяр хүргье та амжилтай давлаа🥰 "+"<d>"+\'<k a= " G-P: O;">Q дарж үргэлжлүүлнэ үү<k>\';3.5("R").a.f="S(0, 0, 0, 0.U);";3.5(".b").a.f="B(x, y, A)"}l{6.a.f="V";6.o="";6.w="W!!!!";3.5("#b").X="💩 ";1 q=Y(()=>{3.5("#b").u="  <p T=b>1 i = 7 + 8 * 9; <d />1 c = i % 8;<d />1 e = c * 4;<d /> 1 j = e / 2 - 2;</p>";6.a.f="B(x, y, A)";6.w="H I z ";K(q)},F)}});',
    61,
    61,
    "|let||document||querySelector|input||||style|tip|meow|br|tweet|backgroundColor|output|btn|roar|woof|span|else|display|nextBtn|value||stop|if|false|inputValue|innerHTML|form|placeholder|49|214|password|34|rgb|none|block|inline|1000|font|Enter|your|true|clearInterval|click|addEventListener|getElementById|14px|size|Next|main|rgba|id|468|red|wrong|innerText|setInterval".split(
      "|"
    ),
    0,
    {}
  )
);
