const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('', {
    url: "http://q.10jqka.com.cn/",
    referer: "http://q.10jqka.com.cn/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 1000
});
window = dom.window;
document = window.document;
navigator = window.navigator;
var TOKEN_SERVER_TIME = 1670329000.280;
!function (n, t) {
    !function () {
        var r, e, a;
        r = e = a = n;
        var u, c, s;
        u = c = s = t;

        function v() {
            var n = arguments[s[0]];
            if (!n)
                return r[0];
            for (var t = u[1], o = a[1], i = c[2]; i < n.length; i++) {
                var v = n.charCodeAt(i)
                    , f = v ^ o;
                o = v,
                    t += e[2].fromCharCode(f)
            }
            return t
        }

        var f = c[3]
            , l = s[4]
            , p = Wn(e[3], r[4], s[5])
            , d = a[5]
            , h = Wn(c[6], s[7])
            , g = c[8]
            , w = c[9]
            , m = r[6]
            , I = u[10]
            , y = a[7]
            , _ = (s[11],
            c[12],
            s[13])
            , C = e[8]
            , E = u[14]
            , A = ot(e[9], e[10])
            , b = a[11]
            , T = u[15]
            , B = c[16]
            , R = r[12]
            , k = r[13]
            , S = s[17]
            , P = u[18]
            , M = Wn(s[19], s[20], u[21])
            , O = v(s[22], e[14])
            , D = s[23]
            , x = s[24]
            , N = u[25]
            , L = u[26]
            , W = Wn(s[27], r[15])
            , F = u[28]
            , Y = r[16]
            , j = a[17]
            , H = e[18]
            , $ = e[19]
            , U = r[20]
            , V = v(c[29], e[21], e[22])
            , X = s[30]
            , G = s[31]
            , K = s[32]
            , Q = s[33]
            , Z = r[23]
            , q = r[24]
            , z = v(u[12], u[34], s[35])
            , J = u[36]
            , nn = a[25]
            , tn = s[37]
            , rn = c[38]
            , en = r[26]
            , an = c[39]
            , on = s[40]
            , un = a[27]
            , cn = u[41]
            , sn = ot(s[42], c[43])
            , vn = r[28]
            , fn = u[8]
            , ln = s[44]
            , pn = a[29]
            , dn = s[45]
            , hn = a[30]
            , gn = c[46]
            , wn = a[31]
            , mn = a[32]
            , In = s[47]
            , yn = r[33]
            , _n = a[34]
            , Cn = c[48]
            , En = a[8]
            , An = v(a[35], s[49])
            , bn = c[50]
            , Tn = c[51]
            , Bn = at(r[36], s[52])
            , Rn = ot(r[37], e[38])
            , kn = e[39]
            , Sn = u[53]
            , Pn = r[40]
            , Mn = s[54]
            , On = s[55]
            , Dn = Wn(u[56], r[41], r[42])
            , xn = r[43]
            , Nn = u[57]
            , Ln = e[44];

        function Wn() {
            return arguments[u[0]].split(e[0]).reverse().join(c[1])
        }

        var Fn = r[45], Yn = Wn(c[58], e[46]), jn = v(s[59], u[60]), Hn = Wn(r[47], s[61]), $n = s[62], Un = s[63],
            Vn = u[2], Xn = [new u[27](r[48]), new u[27](c[64])],
            Gn = [new e[47](ot(a[49])), new u[27](ot(a[50], u[65]))],
            Kn = c[66][f + l] || r[51].getElementsByTagName(p + d)[r[52]], Qn;
        !function (n) {
            n[e[53]] = s[67];

            function t(n) {
                var t = r[51][u[68]]
                    , o = u[69] + n + s[70]
                    , i = t.indexOf(o);
                if (i == -e[54]) {
                    if (o = n + c[70],
                    t.substr(r[52], o.length) != o)
                        return;
                    i = a[52]
                }
                var f = i + o[v(u[71], s[72])]
                    , l = t.indexOf(r[55], f);
                return l == -a[54] && (l = t[a[56]]),
                    t.substring(f, l)
            }

            n[a[57]] = f;

            function o(n, t, a, o, i) {
                var c = n + r[58] + t;
                o && (c += e[59] + o),
                i && (c += v(Jn, u[73], s[74]) + i),
                a && (c += u[75] + a),
                    u[66][u[68]] = c
            }

            n[s[76]] = t;

            function i(n, t, r) {
                this.setCookie(n, u[1], u[77], t, r)
            }

            n[s[78]] = o;

            function f() {
                var t = a[60];
                this.setCookie(t, u[67]),
                this.getCookie(t) || (n[r[53]] = e[61]),
                    this.delCookie(t)
            }

            n[Wn(N, r[62], c[79])] = i
        }(Qn || (Qn = {}));
        var Zn;
        !function (n) {
            var t = u[80], o = v(nn, s[81], u[82]), i = s[67], f, l = u[83][Wn(u[84], e[63])], p, d;

            function g(n) {
                var t = j;
                return t = dn,
                    i ? y(n) : f ? w(n) : void u[2]
            }

            function w(n) {
                E(function () {
                    return n = R(n),
                        f.getAttribute(n)
                })()
            }

            function m() {
                try {
                    return !!(o in s[83] && s[83][o])
                } catch (n) {
                    return void u[2]
                }
            }

            function I(n) {
                try {
                    f.removeItem(n)
                } catch (t) {
                }
            }

            n[c[85]] = C;

            function y(n) {
                try {
                    return f.getItem(n)
                } catch (t) {
                    return u[86]
                }
            }

            n[c[87]] = B;

            function _(n, t) {
                try {
                    f.setItem(n, t)
                } catch (r) {
                }
            }

            function C() {
                var n = e[64]
                    , r = u[88];
                if (i = m(),
                    i)
                    f = a[65][o];
                else if (l[at(e[66])][at(e[67], a[68])])
                    try {
                        p = new ActiveXObject(Wn(a[69], s[89], l)),
                            p.open(),
                            p.write(s[90]),
                            p.close(),
                            d = p.w[e[70]][s[2]][e[71]],
                            f = d.createElement(n + t + r)
                    } catch (c) {
                        f = l.createElement(o),
                            d = l[Wn(u[91], a[72])] || l.getElementsByTagName(s[92])[s[2]] || l[a[73]]
                    }
            }

            function E(n) {
                return function () {
                    d.appendChild(f),
                        f.addBehavior(s[93]),
                        f.load(o);
                    var t = n();
                    return d.removeChild(f),
                        t
                }
            }

            n[c[94]] = g;

            function A(n) {
                var t, r, e;
                if (t = r = e = a,
                    i)
                    I(n);
                else {
                    if (!f)
                        return void e[52];
                    b(n)
                }
            }

            function b(n) {
                E(function () {
                    n = R(n),
                        f.removeAttribute(n),
                        f.save(o)
                })()
            }

            function T(n, t) {
                E(function () {
                    n = R(n),
                        f.setAttribute(n, t),
                        f.save(o)
                })()
            }

            n[a[74]] = A;

            function B(n, t) {
                if (void 0 === t)
                    return A(n);
                if (i)
                    _(n, t);
                else {
                    if (!f)
                        return void u[2];
                    T(n, t)
                }
            }

            function R(n) {
                var t = s[95]
                    , e = r[75]
                    , a = new r[47](t + h + e, c[96]);
                return n.replace(new c[27](u[97]), v(s[98], s[99], s[100])).replace(a, c[101])
            }
        }(Zn || (Zn = {}));
        var qn = function () {
            var n, t, r;
            n = t = r = a;
            var e, o, i;
            e = o = i = s;
            var u = o[15]
                , c = o[102]
                , f = e[103];

            function l(r) {
                var a = o[102]
                    , i = e[103];
                this[n[76]] = r;
                for (var u = t[52], c = r[a + g + i]; u < c; u++)
                    this[u] = t[52]
            }

            return l[e[104]][w + m + I + u] = function () {
                for (var a = e[105], u = this[a + y], c = [], s = -e[0], v = o[2], f = u[r[56]]; v < f; v++)
                    for (var l = this[v], p = u[v], d = s += p; c[d] = l & parseInt(t[77], n[78]),
                    --p != r[52];)
                        --d,
                            l >>= parseInt(n[79], i[106]);
                return c
            }
                ,
                l[v(t[80], t[81], b)][ot(i[107])] = function (n) {
                    for (var r = e[8], a = this[ot(e[108], e[109])], o = t[52], u = e[2], s = a[c + r + f]; u < s; u++) {
                        var v = a[u]
                            , l = i[2];
                        do {
                            l = (l << t[82]) + n[o++]
                        } while (--v > t[52]);
                        this[u] = l >>> i[2]
                    }
                }
                ,
                l
        }(), zn;
        !function (n) {
            var t = s[13]
                , o = c[53]
                , i = r[83]
                , f = r[84]
                , l = s[110]
                , d = r[85]
                , h = r[86];

            function g(n, a, o, i, u) {
                for (var c = s[13], v = r[87], f = n[s[111]]; a < f;)
                    o[i++] = n[a++] ^ u & parseInt(c + v + t + _, r[88]),
                        u = ~(u * parseInt(e[89], e[82]))
            }

            function w(n) {
                for (var t = c[112], i = r[52], v = n[s[111]], f = []; i < v;) {
                    var l = n[i++] << parseInt(C + t, c[113]) | n[i++] << e[82] | n[i++];
                    f.push(m.charAt(l >> parseInt(e[90], e[82])), m.charAt(l >> parseInt(s[114], e[78]) & parseInt(a[91], r[88])), m.charAt(l >> u[59] & parseInt(E + o, a[78])), m.charAt(l & parseInt(a[92], u[113])))
                }
                return f.join(e[0])
            }

            for (var m = at(u[115], s[116]), I = {}, y = u[2]; y < parseInt(i + A, e[93]); y++)
                I[m.charAt(y)] = y;

            function O(n) {
                var t, r, e;
                t = r = e = s;
                var o, i, u;
                o = i = u = a;
                for (var c = ot(i[94]), l = e[2], p = n[o[56]], d = []; l < p;) {
                    var h = I[n.charAt(l++)] << parseInt(at(t[117]), u[82]) | I[n.charAt(l++)] << parseInt(v(t[118], u[95], e[119]), o[88]) | I[n.charAt(l++)] << t[59] | I[n.charAt(l++)];
                    d.push(h >> parseInt(e[120], t[106]), h >> parseInt(t[121], r[122]) & parseInt(f + b + c, t[106]), h & parseInt(o[96], u[88]))
                }
                return d
            }

            function D(n) {
                var t = O(n);
                if (rn,
                    p,
                t[r[52]] != h)
                    return error = T + B + l,
                        void 0;
                var a = t[c[0]]
                    , o = [];
                return g(t, +parseInt(e[79], c[122]), o, +u[2], a),
                    x(o) == a ? o : void 0
            }

            function x(n) {
                var t = o;
                t = Vn;
                for (var e = c[2], i = a[52], u = n[c[111]]; i < u; i++)
                    e = (e << s[123]) - e + n[i];
                return e & parseInt(s[124], r[88])
            }

            function N(n) {
                var t = et
                    , r = x(n)
                    , e = [h, r];
                return g(n, +a[52], e, +a[88], r),
                    t = P,
                    w(e)
            }

            n[e[97]] = w,
                n[R + k + S] = O,
                n[u[125]] = N,
                n[d + P + M] = D
        }(zn || (zn = {}));
        var Jn;
        !function (n) {
            var t = Fn
                , o = at(c[126], a[98])
                , i = r[99]
                , f = v(U, u[127])
                , l = s[128]
                , p = ot(a[100])
                , d = r[5]
                , h = r[101]
                , g = ot(u[129])
                , w = s[130]
                , m = r[102]
                , C = a[103]
                , E = e[104];

            function A(n) {
                for (var t = (Tn,
                    I,
                    []), e = r[52]; e < n[c[111]]; e++)
                    t.push(n.charCodeAt(e));
                return t
            }

            function b() {
                var n = new e[105];
                try {
                    return time = s[52].now(),
                    time / parseInt(c[131], a[88]) >>> c[2]
                } catch (t) {
                    return time = n.getTime(),
                    time / parseInt(s[121], s[84]) >>> r[52]
                }
            }

            function T(n) {
                var t = u[8]
                    , o = {}
                    , i = function (n, o) {
                    var i = c[102], f, l, p, d;
                    for (o = o.replace(s[132], u[1]),
                             o = o.substring(u[0], o[e[56]] - c[0]),
                             f = o.split(c[133]),
                             p = c[2]; p < f[i + t + O]; p++)
                        if (l = f[p].split(v(r[106], c[134])),
                        l && !(l[r[56]] < s[122])) {
                            for (d = r[88]; d < l[r[56]]; d++)
                                l[r[54]] = l[r[54]] + r[107] + l[d];
                            l[s[2]] = new r[47](c[135]).test(l[e[52]]) ? l[a[52]].substring(u[0], l[e[52]][D + x] - c[0]) : l[a[52]],
                                l[r[54]] = new a[47](c[135]).test(l[r[54]]) ? l[e[54]].substring(s[0], l[a[54]][a[56]] - u[0]) : l[s[0]],
                                n[l[c[2]]] = l[e[54]]
                        }
                    return n
                };
                return new r[47](e[108]).test(n) && (o = i(o, n)),
                    o
            }

            function B(n) {
                var t, e, a;
                t = e = a = c;
                var u, s, v;
                if (u = s = v = r,
                typeof n === ot(s[109], sn) && n[Wn(y, a[136], s[110])])
                    try {
                        switch (parseInt(n[e[137]])) {
                            case parseInt(a[131], t[122]):
                                break;
                            case parseInt(v[111], s[78]):
                                top[e[138]][v[112]] = n[t[139]];
                                break;
                            case parseInt(u[113], e[122]):
                                top[o + i + N][e[140]] = n[s[114]];
                                break;
                            default:
                                break
                        }
                    } catch (f) {
                    }
            }

            function R(n, t, r) {
                var e, a, o;
                e = a = o = u,
                    q ? n.addEventListener(t, r) : n.attachEvent(a[25] + t, r)
            }

            function k() {
                return Math.random() * parseInt(u[141], r[78]) >>> r[52]
            }

            function S(n, t) {
                var o = en
                    , i = new r[47](e[115], a[116]);
                o = T;
                var s = new u[27](v(p, r[117], m));
                if (n) {
                    var f = n.match(i);
                    if (f) {
                        var l = f[u[0]];
                        return t && s.test(l) && (l = l.split(r[118]).pop().split(r[107])[c[2]]),
                            l
                    }
                }
            }

            function P(n) {
                var t = mn
                    , o = c[142]
                    , i = r[119]
                    , v = e[120]
                    , I = a[121];
                if (!(n > e[122])) {
                    n = n || a[52];
                    var y = parseInt(u[143], e[78])
                        , _ = a[51].createElement(u[144]);
                    t = Q,
                        _[c[145]] = location[r[123]] + a[124] + parseInt((new r[105]).getTime() / y) + (f + o + l),
                        _[e[125]] = function () {
                            Vn = u[0],
                                setTimeout(function () {
                                    P(++n)
                                }, n * parseInt(e[126], u[84]))
                        }
                        ,
                        _[p + L + d] = _[s[146]] = function () {
                            var n, t, r;
                            n = t = r = a;
                            var e, o, u;
                            e = o = u = c;
                            var s = e[147];
                            this[t[127]] && this[i + W] !== o[148] && this[u[149]] !== o[150] && this[s + F + h] !== u[151] || (Vn = n[52],
                                _[e[152]] = _[g + w + v] = n[128])
                        }
                        ,
                        c[66][m + I].appendChild(_)
                }
            }

            function M(n) {
                var t, e, a;
                t = e = a = r;
                var o, i, u;
                return o = i = u = s,
                    new u[27](t[129]).test(n)
            }

            function X() {
                var n = new s[52];
                return typeof TOKEN_SERVER_TIME == s[153] ? r[52] : (time = parseInt(TOKEN_SERVER_TIME),
                    time)
            }

            function G(n) {
                var t, e, a;
                t = e = a = s;
                var o, i, u;
                o = i = u = r;
                for (var c = u[52], v = a[2], f = n[o[56]]; v < f; v++)
                    c = (c << a[123]) - c + n.charCodeAt(v),
                        c >>>= o[52];
                return c
            }

            function K(n) {
                var t = new s[27](e[130], s[80]);
                if (n) {
                    return n.match(t)
                }
            }

            function Z(n) {
                var t = new u[27](c[154]);
                if (M(n))
                    return n;
                var o = t.test(n) ? -a[86] : -parseInt(r[79], e[88]);
                return (tn,
                    _,
                    n.split(s[155])).slice(o).join(a[131])
            }

            n[Y + C + j] = T,
                t = En,
                n[c[156]] = P,
                n[ot(u[157])] = B,
                n[r[132]] = A,
                n[c[158]] = G,
                n[c[159]] = k,
                n[r[133]] = M,
                n[s[160]] = Z,
                n[E + H] = S,
                n[$ + U] = K,
                n[s[161]] = z,
                n[s[162]] = b,
                n[r[134]] = X;
            var q = !!a[65][a[135]];

            function z(n) {
                for (var t = v(O, u[163]), a = e[136], o = s[2], i = n[V + t + a] - s[0]; i >= r[52]; i--)
                    o = o << r[54] | +n[i];
                return o
            }

            n[u[164]] = R
        }(Jn || (Jn = {}));
        var nt;
        !function (n) {
            var t = u[165]
                , o = a[137]
                , i = at(s[166], s[167])
                , v = u[168]
                , f = a[138]
                , l = c[169]
                , p = ot(s[170], B)
                , d = a[52]
                , h = r[52]
                , g = c[2]
                , w = c[2]
                , m = c[2]
                , I = s[2]
                , y = s[67]
                , _ = t + X in s[66].createElement(s[171]) ? o + G + i : s[172] in c[66] ? u[173] : v + K + f + Q;
            Jn.eventBind(s[66], _, S),
                Jn.eventBind(a[51], r[139], T),
                Jn.eventBind(u[66], Wn(e[140], e[141], s[174]), T),
                Jn.eventBind(c[66], l + Z + q, M),
                Jn.eventBind(u[66], c[175], b);

            function C() {
                return w
            }

            function E() {
                return d
            }

            function b(n) {
                w++
            }

            function T(n) {
                d++
            }

            function R() {
                return h
            }

            function k() {
                return g
            }

            function S(n) {
                h++
            }

            function P() {
                return {
                    x: m,
                    y: I,
                    trusted: y
                }
            }

            function M(n) {
                var t, r, e;
                t = r = e = a;
                var o, i, u;
                o = i = u = c;
                var s = (S,
                    A,
                    u[36]);
                g++,
                    y = void 0 == n[s + z] || n[J + nn],
                    m = n[ot(r[142], o[84])],
                    I = n[i[176]]
            }

            n[e[143]] = E,
                n[ot(e[144])] = R,
                n[e[145]] = k,
                n[u[177]] = C,
                n[tn + p + rn] = P
        }(nt || (nt = {}));
        var tt;
        !function (n) {
            var t = e[146]
                , f = c[4]
                , l = c[178]
                , p = u[179]
                , h = r[147]
                , g = r[148]
                , m = e[149]
                , I = s[102]
                , y = v(rn, u[180], zn)
                , _ = at(r[150], Y)
                , C = a[151]
                , E = u[181]
                , A = c[182]
                , b = e[152]
                , B = u[183]
                , R = s[184]
                , k = a[64];
            BROWSER_LIST = {
                _1: function () {
                    return c[185] in r[65]
                },
                _2: function () {
                    return a[153] in r[65]
                },
                _3: function () {
                    return e[154] in u[83]
                },
                _4: function () {
                    var n = J
                        , r = u[186]
                        , o = s[187];
                    return n = et,
                    e[155] in e[65] && !(r + o + t in a[51].getElementsByTagName(en + f)[s[2]])
                },
                _5: function () {
                    return e[155] in s[83] && !(e[156] in c[83])
                },
                _6: function () {
                    var n, t, r;
                    n = t = r = c;
                    var e, o, u;
                    return e = o = u = a,
                    e[155] in t[83] && !i
                },
                _7: function () {
                    var n, t, r;
                    n = t = r = a;
                    var e, o, i;
                    return e = o = i = u,
                    o[188] in o[83] && !o[83][r[157]]
                },
                _8: function () {
                    return a[155] in e[65] && !e[65][e[158]]
                },
                _9: function () {
                    return u[188] in s[83] && r[65][e[158]]
                },
                _10: function () {
                    var n, t, r;
                    n = t = r = a;
                    var e, o, i;
                    e = o = i = c;
                    var u = o[189];
                    return n[159] === navigator[an + u + on]
                },
                _11: function () {
                    return ot(u[190]) === navigator[r[160]]
                },
                _12: function () {
                    var n, t, r;
                    return n = t = r = s,
                    at(t[191]) in r[83]
                },
                _13: function () {
                    var n, t, r;
                    n = t = r = s;
                    var a, o, i;
                    return a = o = i = e,
                    i[161] in t[83]
                },
                _14: function () {
                    return new u[27](a[162], r[116]).test(navigator.appVersion)
                },
                _15: function () {
                    return e[163] in navigator
                },
                _16: function () {
                    return new c[27](u[192], ot(u[193])).test(navigator.vendor)
                },
                _17: function () {
                    return u[194] in u[83]
                },
                _18: function () {
                    return u[195] in c[83] && new r[47](s[196], e[116]).test(o)
                },
                _19: function () {
                    var n, t, r;
                    n = t = r = s;
                    var a, i, u;
                    a = i = u = e;
                    var c = ot(i[164], i[165])
                        , v = u[166];
                    return l + c + v in t[83] && new n[27](u[167], t[80]).test(o)
                },
                _20: function () {
                    var n = u[197];
                    return r[161] in u[83] && new r[47](n + un).test(o)
                },
                _21: function () {
                    return ot(s[198], r[168]) in r[65] && new c[27](c[199], r[116]).test(o)
                },
                _22: function () {
                    var n = x;
                    return n = S,
                    s[195] in e[65] && new c[27](a[169]).test(o)
                },
                _23: function () {
                    var n, t, r;
                    n = t = r = c;
                    var a, i, u;
                    return a = i = u = e,
                    u[161] in a[65] && new t[27](u[170]).test(o)
                },
                _24: function () {
                    return s[195] in r[65] && s[200] in e[65]
                },
                _25: function () {
                    var n = w;
                    return n = Q,
                    cn + sn in u[83]
                }
            };

            function P() {
                var n = v(q, e[171], r[172]);
                return plugin_num = a[52],
                navigator[u[201]] && (plugin_num = navigator[p + h + n][c[111]]),
                    plugin_num
            }

            function M() {
                for (var n in BROWSER_LIST)
                    if (BROWSER_LIST.hasOwnProperty(n)) {
                        var t = BROWSER_LIST[n];
                        if (t())
                            return +n.substr(u[0])
                    }
                return s[2]
            }

            var O = navigator[s[201]];

            function D() {
                var n, t, r;
                n = t = r = s;
                var e, o, i;
                e = o = i = a;
                var u = e[173];
                return at(e[174]) == (navigator[g + vn + u + m] || navigator[n[202]])
            }

            function N(n) {
                if (!e[65][at(s[191])])
                    return !a[54];
                var t;
                try {
                    t = new a[65][a[155]](n)
                } catch (r) {
                    return !u[0]
                }
                return !!t
            }

            function L() {
                return a[65][a[175]][a[176]]
            }

            function W() {
                for (var n = [], t = r[52]; t < parseInt(a[79], a[93]); t++)
                    n[t] = tn[t]();
                return Jn.booleanToDecimal(n)
            }

            function F() {
                var t = (n,
                    d,
                    navigator[r[177]]);
                return t && t[I + fn + y] > a[52]
            }

            function j() {
                return z(new a[47](ln + pn + _, s[80])) || N(s[203])
            }

            function H() {
                return z(new a[47](Wn(s[204], r[178]), e[116]))
            }

            function $() {
                var n = Y
                    , t = at(a[179], a[180]);
                n = J;
                var r;
                try {
                    r = c[66].createElement(dn + t).getContext(c[205])
                } catch (e) {
                }
                return !!r
            }

            function U() {
                return -parseInt(r[181], u[113]) === (new c[52]).getTimezoneOffset()
            }

            function V() {
                var n, t, e;
                n = t = e = r;
                var a, o, i;
                a = o = i = u;
                for (var c = navigator[o[206]], s = o[2]; s < An[o[111]]; s++)
                    if (An[s].test(c))
                        return s + e[54];
                return i[2]
            }

            function X() {
                var n = (m,
                    B,
                    a[182]);
                return z(new r[47](C + n + hn))
            }

            function G() {
                return gn + E + wn + A in a[51]
            }

            function K() {
                var n, t, r;
                return n = t = r = c,
                    r[86]
            }

            function Z() {
                return u[86]
            }

            function q() {
                return navigator.javaEnabled()
            }

            function z(n) {
                var t = T;
                t = h;
                for (var r = a[52]; r < O[u[111]]; r++) {
                    var e = O[r][s[207]];
                    if (n.test(e))
                        return !a[52]
                }
                return !c[0]
            }

            function J() {
                var n, t, r;
                return n = t = r = e,
                n[183] === r[51][t[184]]
            }

            function nn() {
                var n, t, r;
                return n = t = r = c,
                    n[86]
            }

            var tn = [q, j, H, X, L, En, D, bn, G, U, $, F, J, nn, Z, K];

            function En() {
                var n = Nn;
                n = un;
                try {
                    return a[185] in s[83]
                } catch (t) {
                    return s[86]
                }
            }

            var An = [new a[47](u[208]), new a[47](e[186]), new e[47](a[187]), new s[27](mn + In), new e[47](r[188]), new u[27](e[189]), new s[27](s[209]), new u[27](u[210]), new a[47](b + yn), new e[47](B + R + k), new c[27](u[211])];

            function bn() {
                return new u[27](ot(r[190]), u[80]).test(navigator[s[212]] || navigator[_n + Cn])
            }

            n[s[213]] = V,
                n[c[214]] = M,
                n[e[191]] = P,
                n[e[192]] = W
        }(tt || (tt = {}));
        var rt;
        !function (n) {
            var t = e[87], o = a[8], i = e[8], f = s[215], l = r[52], p = s[0], d = parseInt(c[216], u[122]), h = e[86],
                g = u[217], w = u[123], m = e[165], I = parseInt(t + En, c[122]), y = parseInt(a[79], a[82]),
                _ = c[218], C = parseInt(a[193], e[82]), E = parseInt(o + i, r[78]), A = parseInt(u[219], s[122]),
                b = parseInt(f + An, s[106]), T = parseInt(r[194], s[106]), B = parseInt(ot(s[220], e[195]), r[82]),
                R = parseInt(e[196], u[122]), k = parseInt(e[197], a[78]), S;

            function P() {
                var n = s[0]
                    , t = r[88]
                    , e = parseInt(u[13], c[122])
                    , a = s[217];
                S = new qn([a, a, a, a, n, n, n, e, t, t, t, t, t, t, t, a, t, n]),
                    S[p] = Jn.serverTimeNow(),
                    M(),
                    S[B] = Vn,
                    S[k] = Un,
                    S[R] = c[2],
                    S[h] = Jn.strhash(navigator.userAgent),
                    S[b] = tt.getBrowserFeature(),
                    S[g] = tt.getPlatform(),
                    S[w] = tt.getBrowserIndex(),
                    S[m] = tt.getPluginNum()
            }

            function M() {
                var n = Qn.getCookie(Fn) || Zn.get(jn);
                if (n && n[s[111]] == parseInt(c[221], e[93])) {
                    var t = zn.decode(n);
                    if (t && (S.decodeBuffer(t),
                    S[l] != s[2]))
                        return
                }
                S[l] = Jn.random()
            }

            function O() {
                S[R]++,
                    S[p] = Jn.serverTimeNow(),
                    S[d] = Jn.timeNow(),
                    S[B] = Vn,
                    S[I] = nt.getMouseMove(),
                    S[y] = nt.getMouseClick(),
                    S[_] = nt.getMouseWhell(),
                    S[C] = nt.getKeyDown(),
                    S[E] = nt.getClickPos().x,
                    S[A] = nt.getClickPos().y;
                var n = S.toBuffer();
                return zn.encode(n)
            }

            n[e[57]] = P;

            function D() {
                return O()
            }
            _red = D;
            n[v(an, a[198], r[199])] = D
        }(rt || (rt = {}));
        var et;

        function at() {
            var n, t, r;
            n = t = r = u;
            var a, o, i;
            a = o = i = e;
            var c = arguments[o[52]];
            if (!c)
                return t[1];
            for (var s = o[0], v = o[1], f = a[52]; f < c.length; f++) {
                var l = c.charCodeAt(f)
                    , p = l ^ v;
                v = v * f % n[222] + o[200],
                    s += i[2].fromCharCode(p)
            }
            return s
        }

        !function (n) {
            var t, r, e;
            t = r = e = a;
            var o, i, c;
            o = i = c = u;
            var s = c[223], f = t[201], l = i[224], p = o[225], d = t[202], h = i[92], g = e[203], w = o[226],
                m = c[110], I = c[223], y = !!r[65][r[135]], _, E, A, T, B, R;

            function k(n) {
                var r = o[227]
                    , e = t[204];
                return j(n) && Qn[r + e + s]
            }

            function S(n, t, e) {
                var a, i, u;
                a = i = u = o;
                var c, s, v;
                c = s = v = r;
                var f = b;
                if (f = En,
                Wn(v[205], s[206]) in t)
                    return t.apply(n, e);
                switch (e[v[56]]) {
                    case v[52]:
                        return t();
                    case i[0]:
                        return t(e[c[52]]);
                    case u[122]:
                        return t(e[c[52]], e[a[0]]);
                    default:
                        return t(e[u[2]], e[v[88]], e[i[63]])
                }
            }

            function P() {
                var n, t, r;
                n = t = r = i;
                var a, o, u;
                a = o = u = e,
                    U(o[65], n[188], function (r) {
                        return function (e) {
                            if (e && new t[27](f + l, v(Fn, n[228])).test(e))
                                try {
                                    D()
                                } catch (o) {
                                    return a[207]
                                }
                            return new r(e)
                        }
                    })
            }

            function M() {
                var n = t[51].getElementsByTagName(c[229]);

                function a(a) {
                    if (!new i[27](at(o[230])).test(a.protocol))
                        return r[61];
                    var u = a[i[231]];
                    if (!u) {
                        var s = n[i[2]];
                        s && (u = s[t[208]])
                    }
                    if ((!u || new e[47](ot(c[232], $n), c[80]).test(u)) && (a[o[140]].split(i[233])[e[52]] == _ && a[at(i[234], c[235])]))
                        return i[86];
                    return e[44]
                }

                Jn.eventBind(t[51], r[209], function (n) {
                    var t = i[236];
                    n = n || event;
                    var r = n[bn + t + p] || n[Wn(o[5], c[237], o[238])];
                    do {
                        if (r[i[240]] == i[241]) {
                            a(r) && D();
                            break
                        }
                    } while (r = r[i[239]])
                }),
                    Jn.eventBind(i[66], o[242], D),
                Ln || Jn.eventBind(o[83], e[210], D)
            }

            function O() {
                var n = ot(o[243])
                    , e = o[244];
                _ = location[c[140]].split(o[233])[i[2]],
                    E = location[n + Tn + e],
                    T = location[i[245]],
                    B = location[ot(t[211])],
                    A = Jn.getRootDomain(E),
                    R = new o[27](i[246] + A.replace(new r[47](t[212], i[96]), ot(c[247], r[213])) + t[214], r[116]),
                    M(),
                    Y(),
                    N(),
                    $(),
                    D()
            }

            function D() {
                var n = rt.update();
                return Qn.setCookie(Fn, n, o[248], A, t[215]),
                    Zn.set(jn, n),
                    n
            }

            function N() {
                var n = B;
                n = Un;
                var r = ot(c[249]);
                H(t[216], function (n) {
                    return function (t, a) {
                        var i, u, c;
                        i = u = c = e;
                        var s, v, f;
                        s = v = f = o,
                        f[22][i[217]][f[250]].call(t) === v[251] && (t = t[u[218]] || i[0]);
                        var l = D();
                        return a = a || {},
                            Qn[at(u[219], K)] ? X(t) ? k || (t = L(t)) : a[i[220]] ? a[v[252]][jn] = l : (a[s[252]] = new Headers,
                                a[u[220]].append(jn, l)) : (l = rt.update(),
                                a[f[252]] ? a[Bn + d][jn] = l : (a[h + r] = new Headers,
                                    a[i[220]].append(jn, l))),
                            n.call(this, t, a)
                    }
                })
            }

            function L(n) {
                for (var a = rt.update(), u = Gn, s = c[2]; s < u[Rn + kn]; s++)
                    if (u[s].test(n))
                        return n;
                return n + (new t[47](v(r[82], r[221], t[222])).test(n) ? Wn(c[253], i[254], bn) : e[223]) + Yn + c[70] + o[255](a)
            }

            function W(n) {
                var t = cn
                    , a = i[16]
                    , u = e[43];
                t = C;
                var s;
                U(n, c[256], function (n) {
                    return function () {
                        var t, r, a;
                        t = r = a = i;
                        var o, u, c;
                        o = u = c = e;
                        try {
                            X(arguments[o[54]]) && !k(arguments[a[0]]) ? arguments[t[0]] = L(arguments[r[0]]) : s = D(),
                                n.apply(this, arguments),
                            X(arguments[r[0]]) || (Qn[u[53]] || (s = rt.update()),
                                this.setRequestHeader(jn, s))
                        } catch (v) {
                            return o[207]
                        }
                    }
                }),
                    U(n, c[257], function (n) {
                        var t = w;
                        return t = p,
                            function () {
                                var t, e, i;
                                t = e = i = r;
                                var c, s, v;
                                c = s = v = o;
                                var f = c[258];
                                try {
                                    if (parseInt(this.status) === parseInt(f + g + Sn, e[78])) {
                                        for (var l = n.apply(this, arguments), p = new s[27](i[224], t[225]), d, h, w = {}; d = p.exec(l);)
                                            w[d[s[0]].toLowerCase()] = d[i[88]];
                                        Jn.analysisRst(Jn.parse(w[$n.toLowerCase()]))
                                    }
                                } catch (m) {
                                    return Pn + a + u
                                }
                                return n.apply(this, arguments)
                            }
                    })
            }

            function Y() {
                var n = i[83][Wn(x, c[259])];
                n && W(n.prototype),
                r[65][o[188]] && P()
            }

            function j(n) {
                var r = rn;
                r = p;
                var e = Jn.getHostFromUrl(n, t[44]);
                return e ? R.test(e) : t[44]
            }

            function H(n, t) {
                if (n in i[83]) {
                    c[83].hasOwnProperty(n) && U(i[83], n, t);
                    var r = e[65][c[260]];
                    if (r) {
                        var a = r[o[104]];
                        a.hasOwnProperty(n) && U(a, n, t)
                    }
                }
            }

            function $() {
                var n = at(c[261])
                    , e = c[262]
                    , a = r[226];

                function u(n) {
                    return function (t) {
                        try {
                            s(t)
                        } catch (r) {
                            return r
                        }
                        return S(this, n, arguments)
                    }
                }

                function s(r) {
                    var u = it
                        , c = i[50]
                        , s = at(o[263], i[264]);
                    if (r && r[c + s + Mn + On] == n + e + Dn) {
                        var v = r[t[227]];
                        u = F,
                        V(v) || (k(v) ? D() : r[a + xn + w] = L(r.src))
                    }
                }

                function v(n) {
                    y ? U(Element.prototype, n, u) : (U(Kn, n, u),
                        U(r[51].body, n, u))
                }

                t[65][Hn] = Jn[t[228]],
                    v(at(r[229])),
                    v(r[230])
            }

            function U(n, a, i) {
                var u = D
                    , s = c[265]
                    , v = ot(t[231]);
                if (!n)
                    return e[61];
                var f = n[a];
                if (u = S,
                    !f)
                    return o[86];
                var l = i(f);
                return y || (l[c[266]] = f + t[0]),
                    l[s + m + v + I] = f,
                    n[a] = l,
                    r[44]
            }

            function V(n) {
                var t = Xn
                    , e = o[83][r[232]];
                e && (t = t.concat(e));
                for (var a = i[2]; a < t[c[111]]; a++)
                    if (t[a].test(n))
                        return o[67];
                return o[86]
            }

            function X(n) {
                var t = Jn.getOriginFromUrl(n);
                return t ? !new r[47](e[233] + T).test(t[c[122]]) || !new o[27](B).test(t[r[54]]) : e[61]
            }

            n[t[57]] = O
        }(et || (et = {}));

        function ot() {
            var n, t, e;
            n = t = e = c;
            var a, o, i;
            a = o = i = r;
            var u = arguments[a[52]];
            if (!u)
                return o[0];
            for (var s = a[0], v = n[267], f = o[200], l = t[2]; l < u.length; l++) {
                var p = u.charCodeAt(l);
                f = (f + t[0]) % v.length,
                    p ^= v.charCodeAt(f),
                    s += i[2].fromCharCode(p)
            }
            return s
        }

        var it;
        !function (n) {
            var t = Wn(r[234], e[235]);

            function o() {
                try {
                    c()
                } catch (n) {
                    return n
                }
            }

            function i() {
                var n = parseInt(t + Nn, s[113]);
                setInterval(function () {
                    Jn.getServerTime()
                }, n)
            }

            function c() {
                Qn.Init(),
                    Zn.Init(),
                    rt.Init(),
                    et.Init(),
                    i()
            }

            u[83][v(r[236], e[237])] || (o(),
                u[83][a[238]] = a[44])
        }(it || (it = {}))
    }()
}(["", 9527, String, Boolean, "eh", "ad", "Bu", "ileds", "1", "\b", Array, "7", "base", "64De", "\u2543\u252b", "etatS", "pa", "e", "FromUrl", "getOrigi", "nFromUrl", "\u255b\u253e", "b?\x18q)", "ic", "k", "sted", "he", "wser", "oNo", "ckw", "ent", "hst", "^And", "RM", "systemL", 5, "\u255f\u0978\u095b\u09f5", "TR8", "!'", "gth", "er", "TP", 83, "r", !0, "v", "v-nixeh", RegExp, "thsi.cn", 'K\x19"]K^xVV', "KXxAPD?\x1b[Y", document, 0, "allow", 1, "; ", "length", "Init", "=", "; domain=", "checkcookie", !1, "eikooCled", "tnemucod", "d", window, "\u2553\u0972\u0959\u09e4\u09bd\u0938\u0980\u09c5\u09b1\u09d1\u09a7\u09dc\u09dd\u09d3\u09c2", "\u2556\u0979\u095e\u09d3\u09b5\u0935\u098f\u09c7\u099d\u09d2\u09b0", 23, "l$P$~", "frames", "ducument", "ydob", "documentElement", "del", "@[\\]^`{|}~]", "base_fileds", "255", 10, "10", 39, "\u2547\u2535\u255a\u252e\u2541\u2535\u254c\u253c\u2559", 8, "4", "3", "de", 3, "11", 2, "203", "22", "111111", "3f", 16, "\x0f", "\u2506\u2537\u2507\u2537", "11111111", "base64Encode", "v\x1d", "ati", "WY", "te", "bo", "rs", "getHost", Date, "{DF", ":", "^{.*}$", "WU<P[C", 52, "1001", "href", "1111101010", "redirect_url", "^\\s*(?:https?:)?\\/{2,}([^\\/\\?\\#\\\\]+)", "i", "\u256c\u252c\u2516\u254b", "@", "ready", "change", "dy", 7, "protocol", "//s.thsi.cn/js/chameleon/time.1", "onerror", "2000", "readyState", null, "^(\\d+\\.)+\\d+$", "^\\s*(?:(https?:))?\\/{2,}([^\\/\\?\\#\\\\]+)", ".", "strToBytes", "isIPAddr", "serverTimeNow", "addEventListener", "th", "wh", "Scro", "mousemove", 55, "evomhcuot", "[[?PVC\x0e", "getMouseMove", '_R"xWB%Po_3YT', "getMouseClick", "ght", "gin", "msD", "ack", "\u2556\u096b\u095f", "Nativ", "^A", "MozSettingsEvent", "safari", "ActiveXObject", "postMessage", "Uint8Array", "WeakMap", "Google Inc.", "vendor", "chrome", "python", "sgAppName", "JX", 6, "me", "LBBROWSER", "w4", "2345Explorer", "TheWorld", "\u2544", 40, "tTr", "\u2506", "navigator", "webdriver", "languages", "taborcA|FDP", "\u2541\u097c\u0949", 95, "1e0", "e Cli", "iso-8859-1", "defaultCharset", "localStorage", "^Win64", "^Linux armv|Android", "^iPhone", "^iPad", "B_{VV", "getPluginNum", "getBrowserFeature", "12", "16", "sE", "10000", "17", "\u2542\u2532\u2556\u2537\u2543\u2526", "\x1cx`R", 2333, "XMLH", "ers", "0", "lo", 57, "ylppa", "error", "target", "click", "unload", "HE9AWT9Y", "\\.", "c?", "$", "/", "fetch", "prototype", "url", "\u2556\u0971\u0956\u09fe\u09a7", "headers", "\u256b\u2554", 79, "?", "^(.*?):[ \\t]*([^\\r\\n]*)\\r?$", "gm", "s", "src", "analysisRst", "\u255e\u0973\u0949\u09f4\u09a2\u0929\u09ac\u09d4\u0992\u09d2\u09b0\u09d4", "appendChild", "Y", "jsonp_ignore", "^", 70, "421", "XH>a", "\u2574\u253c\u257d\u2530\u2575\u2539\u257c\u2533\u257d\u2522\u256e\u2521\u2560\u2524\u2561\u2525", "CHAMELEON_LOADED"], [1, "", 0, "he", "ad", 29, "\x180G\x1f", "?>=<;:\\\\/,+", "ng", "to", "ff", Number, Error, "11", "6", "er", "ro", "code", "co", "_?L", "ed", "@S\x15D*", Object, "len", "gth", "on", "lo", RegExp, "ySta", 13, "eel", "ee", "ouse", "ll", "\u2544\u2530\u2555\u2531", "FCm-", "isTru", "getC", "Pos", "ve", "or", "ae", "^", "On", "Sho", "can", "ont", "roid", "anguage", "\u2502", "ta", "tna", Date, "3", "am", "e", "n+", "f80", "\x1dD", 6, "\u255f\u253a\u2542\u252b\u2545\u2568\u251e", "KCABLLAC_NOELEMAHC", "X-Antispider-Message", 3, ".baidu.", Function, document, !0, "cookie", "; ", "=", 96, "\u255b\u253e\u2550\u2537\u2543\u252b", "\u250c\u252c\u255c\u253d\u2549\u2521\u251c", ";O", "; expires=", "getCookie", "Thu, 01 Jan 1970 00:00:00 GMT", "setCookie", "Z\x18|", "i", "\u255b\u2534\u2557\u2536\u255a\u2509\u257d\u2512\u2560\u2501\u2566\u2503", 52, window, 10, "Init", !1, "set", "v", "eliflmth", '<script>document.w=window<\/script><iframe src="/favicon.icon"></iframe>', "iS.p", "head", "#default#userData", "get", "[!\"#$%&'()*", "g", "^d", "$D", "\u2568\u2537\u2568\u254c\u256a", "]\\P", "___", "le", "th", "prototype", "base_f", 8, "\\R5Z\\R\x14@^Q3G", "ZV%PgQ?Y]S%", 67, "r", "length", "0", 16, "12", "\u2576\u095f\u0979\u09d5\u0995\u091b\u09a9\u09f9\u09bd\u09f7\u0989\u09fd\u09f5\u09f3\u09f9\u0a41\u0a4d\u098f\u0999\u0905\u0975\u09cb\u09a9\u09a9\u099d\u0927\u0933\u0913\u0a6b\u0999\u09a3\u0937\u098b\u09f5\u0933\u0a7b\u091b\u09b1\u0a63\u095f\u09fb\u094d\u0993\u0943\u092b\u0949\u09a3\u09e7\u09cb\u0925\u0993\u09ab\u09f0\u092c\u092c\u0942\u0950\u09c8\u0944\u09c6\u0990\u0944\u09cb\u098e", "i,", "\u2505\u092f", 12, 56, "20", "1000", 2, 5, "11111111", "encode", "\u255b\u0972\u0959", "\u2519", "s", "WY$PYS", "ystate", "1111101000", / /g, ",", "\u250d", '^".*"$', "edoc_sutats", "status_code", "location", "redirect_url", "href", "4294967295", "j", "1200000", "script", "src", "onreadystatechange", "read", "loaded", "readyState", "complete", "interactive", "onload", "undefined", "\\.com\\.cn$|\\.com\\.hk$", ".", "getServerTime", 'YY7YAD?FjD"', "strhash", "random", "getRootDomain", "booleanToDecimal", "timeNow", "\u2559\u253e", "eventBind", "onwh", "\u255b", 46, "DOMM", "cl", "T^5^", "div", "onmousewheel", "mousewheel", 51, "keydown", "clientY", "getKeyDown", "ch", "plu", "\u2543\u252b", "ouc", "art", "^i", "Po", "callPhantom", "max", "Hei", "ActiveXObject", "nd", "yG&Y]\x17\x15ZUG#A]Ez\x15qY5\x1b", "\u2576\u097e\u094e\u09f8\u09a6\u0938\u09b6\u09fe\u0996\u09d7\u09a7\u09d2\u09cc", "Maxthon", "Q", "opr", "chrome", "BIDUBrowser", "QQBro", "[_$ZUR", "UBrowser", "MSGesture", "plugins", "doNotTrack", "ShockwaveFlash.ShockwaveFlash", "]C|\x18", "webgl2", "platform", "name", "^Win32", "^MacIntel", "^Linux [ix]\\d+", "^BlackBerry", "language", "getPlatform", "getBrowserIndex", "1", "10", 4, 9, "1100", "\t\0", "3c", 256, "w", "TTP", "et", "c", "al", "\u255e", "base", "\u2569\u0975\u094e\u09e5\u09a0\u092e\u09d1\u09ed\u09ce", "target", "fh%PTQr", "#", "\u255f\u097c\u0949\u09f9", 97, "rg", "tnemelEcrs", "fn_Ws", "parentNode", "tagName", "A", "submit", "PX%", "me", "host", "\\.?", "d\x19", "Fri, 01 Feb 2050 00:00:00 GMT", "]E%", "toString", "[object Request]", "headers", 83, "&", encodeURIComponent, "open", "getAllResponseHeaders", "4", "tseuqeRpttHLMX", "Window", "\u2564\u095e", "RI", "\u2550\u0953", "(YaZ", "_", "_str", "V587"]);

function v () {
    return _red()
}
// 测试用例
// console.log(white());