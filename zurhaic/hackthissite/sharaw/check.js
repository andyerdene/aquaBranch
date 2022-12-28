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
    '5 9="11";5 e=1.2(".e");5 3=1.2(".9");5 b=m;5 c=1.2(".c");3;c.H("G",()=>{5 r=3.l;F(i=0;i<9.E;i++){h(9[i]==r[i]){b=A}k{b=m;C}}h(b){c.4.B="y";5 7=1.x("a");7.j("w","../I-D/K.L");7.j("10","7");7.f="q";e.Z(7);1.Y("8").X="Баяр хүргье та амжилтай давлаа !!! "+"<W>"+\'<v 4= " J-V: U;">q дарж үргэлжлүүлнэ үү<v>\';1.2("T").4.6="p(0, 0, 0, 0.S);";1.2(".8").4.6="n(o, u, t)"}k{3.4.6="g";3.l="";3.s="R!!!!";1.2(".8").4.6="g";1.2("#8").f="Зөв бич л дээ!!!!!";Q(()=>{1.2(".8").4.6="p(d, d, d, 0.P)";1.2("#8").f="O хүртэлх тэгш тооны нийлбэрийг ол!";3.4.6="n(o, u, t)";3.s="N M 9: "},z)}});',
    62,
    64,
    "|document|querySelector|input|style|let|backgroundColor|nextBtn|tip|password||output|btn|209|form|innerText|red|if||setAttribute|else|value|false|rgb|49|rgba|Next|inputValue|placeholder|34|214|span|href|createElement|none|1500|true|display|break|jamie|length|for|click|addEventListener|level|font|index|html|your|Enter|1000|812|setInterval|wrong|468|main|14px|size|br|innerHTML|getElementById|appendChild|class|PASSWORD".split(
      "|"
    ),
    0,
    {}
  )
);
// let text = document.querySelector(".text").innerText;
// let bigwords = "QWERTYUIOPLKJHGFDSAZXCVBNM";
// let result = "";
// for (i = 0; i < text.length; i++) {
//   for (j = 0; j < bigwords.length; j++) {
//     if (text[i] == bigwords[j]) {
//       result = result + text[i] + "";
//     }
//   }
// }

// console.log(result);
