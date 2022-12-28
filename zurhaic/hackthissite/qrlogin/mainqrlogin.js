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
    'd k="N{m{|";d 6=5;1 h=2.A(\'.h\');1 7=2.4("z");1 c=2.4("v");1 g=2.4("y");b p(8,6){1 9="";x(1 i=0;i<8.w;i++){1 o=8.u(i)+6;9+=t.B(o)}D 9}7.C("M",b(e){1 3=2.4("K");1 j=p(3.a,6);I(k===j){q.r("H");g.G="Та амжилттай нэвтэрч чадлаа Баяр хүргэе!!!";7.l.F("f");c.l.s("f");3.a=""}J{q.r("L");E("Амжилтгүй....\\nДахин оролдоно уу!!!");3.a=""}});',
    50,
    50,
    "|let|document|input|getElementById||num|btnSubmit|str|modifiedStr|value|function|btnNext|const||hide|tipMsg|form||inputEncrypted|inputString|classList|||charCode|addNumberToCharCode|console|log|remove|String|charCodeAt|next_button|length|for|tip|submit|querySelector|fromCharCode|addEventListener|return|alert|add|textContent|Success|if|else|input_password|Amjiltgui|click|jrwjr".split(
      "|"
    ),
    0,
    {}
  )
);
