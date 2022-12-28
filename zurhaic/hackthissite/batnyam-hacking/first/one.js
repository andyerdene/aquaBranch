eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c.toString(36);
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[c.toString(a)] = k[c] || c.toString(a);
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
    '1.0("v").h=()=>{g 6=1.0("f").i;d(6=="b"){1.0("2").5="a";1.0("2").4.7="9";1.0("8").4.e="k"}l{1.0("2").5="j m n o p q! r s t u:3";1.0("2").4.7="c"}};',
    32,
    32,
    "getElementById|document|warn||style|innerText|pass|color|button1|green|CORRECT|aqua|red|if|display|myPassword|let|onclick|value|YOU|block|else|ARE|THE|DUMBEST|GUY|EVER|BUT|DO|NOT|QUIT|myBttn".split(
      "|"
    ),
    0,
    {}
  )
);
