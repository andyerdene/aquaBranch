eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c.toString(36);
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
    '1 8="z";1 o;1 n=0;1 l=3;1 4=b;2.f("g")[0].h.a="k";1 7=2.j("#m");7.i("r",()=>{1 6=2.5("s");1 9=6.t;c(8==9){4=q}u{4=b;2.5("d").e="Таахаа болиочээ❓❗❓❗"}c(4){2.5("d").e="🎉v!!! w x y🎉";2.f("g")[0].h.a="p"}});',
    36,
    36,
    "|let|document||output|getElementById|mad|madbtn|pisswordl|inputValue|display|false|if|snow|innerHTML|getElementsByClassName|next|style|addEventListener|querySelector|none|entryLimit|btn|entryCount|response|block|true|click|psword|value|else|Congrats|You|did|it|Aquanauts".split(
      "|"
    ),
    0,
    {}
  )
);
