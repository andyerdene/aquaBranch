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
    '5 9="Z";5 e=1.2(".e");5 3=1.2(".9");5 b=m;5 c=1.2(".c");3;c.G("F",()=>{5 o=3.g;E(i=0;i<9.D;i++){j(9[i]==o[i]){b=B}n{b=m;A}}j(b){c.4.x="y";5 7=1.w("a");7.h("H","../C/J.K");7.h("Y","7");7.f="k";e.X(7);1.W("6").V="Баяр хүргье та амжилтай давлаа !!! "+"<U>"+\'<l 4= " I-T: S;">k дарж үргэлжлүүлнэ үү<l>\';1.2("R").4.8="r(0, 0, 0, 0.Q);";1.2(".6").4.8="p(v, u, t)"}n{3.4.8="q";3.g="";3.s="P!!!!";1.2(".6").4.8="q";1.2("#6").f="Зөв бич л дээ!!!!!";O(()=>{1.2(".6").4.8="r(d, d, d, 0.N)";1.2("#6").f="Зарим зүйлс дээр идэвхтэй байвал бүх зүйл сайхан болно";3.4.8="p(v, u, t)";3.s="M L 9: "},z)}});',
    62,
    62,
    "|document|querySelector|input|style|let|tip|nextBtn|backgroundColor|password||output|btn|209|form|innerText|value|setAttribute||if|Next|span|false|else|inputValue|rgb|red|rgba|placeholder|34|214|49|createElement|display|none|1500|break|true|yunchir|length|for|click|addEventListener|href|font|index|html|your|Enter|812|setInterval|wrong|468|main|14px|size|br|innerHTML|getElementById|appendChild|class|Pinecone".split(
      "|"
    ),
    0,
    {}
  )
);
