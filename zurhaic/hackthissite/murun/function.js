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
    '1 L=3.5("u");1 8=3.5("t");1 2=3.5("s");1 b=3.5("m-r");1 a=()=>{q j=/p/o;n j.l(8.v)};8.9("x",()=>{6(!a()){b.4.e="y"}});2.9("z",()=>{6(!a()){1 k=3.h(".A").c();1 i=2.c();1 7=i.d-k.d;C.D(7);6(7<=E){2.4.g="f(F.G)"}H{2.4.g="f(0)"}}});2.9("I",()=>{b.4.e="J";3.h("#K").4.B="w"});',
    48,
    48,
    "|let|submitBtn|document|style|getElementById|if|offset|passwordRef|addEventListener|isPasswordValid|messageRef|getBoundingClientRect|left|visibility|translateX|transform|querySelector|submitRect|passwordRegex|containerRect|test|message|return|gm|87|const|ref|submit|password|username|value|block|input|hidden|mouseover|container|display|console|log|100|16|25em|else|click|visible|next|usernameRef".split(
      "|"
    ),
    0,
    {}
  )
);
