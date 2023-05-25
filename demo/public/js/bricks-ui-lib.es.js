import { defineComponent as p, openBlock as n, createElementBlock as r, createElementVNode as s, computed as d, mergeProps as z, normalizeClass as w, createBlock as f, resolveDynamicComponent as S, createCommentVNode as h, renderSlot as k, toDisplayString as V, resolveComponent as I, createVNode as D, Teleport as j, Fragment as A, renderList as K } from "vue";
const L = p({
  name: "BrIconSettings",
  setup() {
    return {};
  }
}), m = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, i] of t)
    o[l] = i;
  return o;
}, N = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, P = /* @__PURE__ */ s("title", null, "settings", -1), T = /* @__PURE__ */ s("path", { d: "M12 15.516q1.453 0 2.484-1.031t1.031-2.484-1.031-2.484-2.484-1.031-2.484 1.031-1.031 2.484 1.031 2.484 2.484 1.031zM19.453 12.984l2.109 1.641q0.328 0.234 0.094 0.656l-2.016 3.469q-0.188 0.328-0.609 0.188l-2.484-0.984q-0.984 0.703-1.688 0.984l-0.375 2.625q-0.094 0.422-0.469 0.422h-4.031q-0.375 0-0.469-0.422l-0.375-2.625q-0.891-0.375-1.688-0.984l-2.484 0.984q-0.422 0.141-0.609-0.188l-2.016-3.469q-0.234-0.422 0.094-0.656l2.109-1.641q-0.047-0.328-0.047-0.984t0.047-0.984l-2.109-1.641q-0.328-0.234-0.094-0.656l2.016-3.469q0.188-0.328 0.609-0.188l2.484 0.984q0.984-0.703 1.688-0.984l0.375-2.625q0.094-0.422 0.469-0.422h4.031q0.375 0 0.469 0.422l0.375 2.625q0.891 0.375 1.688 0.984l2.484-0.984q0.422-0.141 0.609 0.188l2.016 3.469q0.234 0.422-0.094 0.656l-2.109 1.641q0.047 0.328 0.047 0.984t-0.047 0.984z" }, null, -1), E = [
  P,
  T
];
function F(e, t, o, l, i, a) {
  return n(), r("svg", N, E);
}
const g = /* @__PURE__ */ m(L, [["render", F]]), J = p({
  name: "BrIconMenu",
  setup() {
    return {};
  }
}), G = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, H = /* @__PURE__ */ s("title", null, "menu", -1), Q = /* @__PURE__ */ s("path", { d: "M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z" }, null, -1), R = [
  H,
  Q
];
function U(e, t, o, l, i, a) {
  return n(), r("svg", G, R);
}
const B = /* @__PURE__ */ m(J, [["render", U]]), W = p({
  name: "BrIconKeyboardArrowDown",
  setup() {
    return {};
  }
}), X = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Y = /* @__PURE__ */ s("title", null, "keyboard_arrow_down", -1), Z = /* @__PURE__ */ s("path", { d: "M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z" }, null, -1), ee = [
  Y,
  Z
];
function te(e, t, o, l, i, a) {
  return n(), r("svg", X, ee);
}
const $ = /* @__PURE__ */ m(W, [["render", te]]), M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BrIconKeyboardArrowDown: $,
  BrIconMenu: B,
  BrIconSettings: g
}, Symbol.toStringTag, { value: "Module" })), ne = p({
  name: "BrButton",
  components: {
    ...M
  },
  inheritAttrs: !1,
  props: {
    /**
     * disabled status
     * @values true, false
     */
    disabled: {
      type: Boolean
    },
    /**
     * Color of button
     * @values primary, secondary, info, warning, danger
     */
    variant: {
      type: String,
      default: () => {
      },
      validator: (e) => ["primary", "neutral", "success", "warning", "danger"].indexOf(
        e
      ) >= 0
    },
    /**
     * Type of button
     * @values button, reset, submit
     */
    type: {
      type: String,
      default: () => "button",
      validator: (e) => ["button", "reset", "submit"].indexOf(e) >= 0
    },
    /**
     * size of button
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => {
      },
      validator: (e) => ["small", "medium", "large"].indexOf(e) >= 0
    },
    /**
     * pill button
     * @values true, false
     */
    pill: {
      type: Boolean
    },
    /**
     * Outline Button
     * @values true, false
     */
    outline: {
      type: Boolean
    },
    /**
     * Text Buttons
     * @values true, false
     */
    text: {
      type: Boolean
    },
    /**
     * Href link
     * @values { href: string,
     * target: '_blank' | '_self' | '_parent' | '_top' | 'framename' | undefined,
     * download: string | undefined }
     */
    link: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Set a prefix icon
     * @values icon name
     */
    prefix: {
      type: String,
      default: () => {
      }
    },
    /**
     * Set a suffix icon
     * @values icon name
     */
    suffix: {
      type: String,
      default: () => {
      }
    }
  },
  emits: ["on-click", "on-focus", "on-blur"],
  setup(e, { emit: t }) {
    const o = d(() => {
      if (e.disabled)
        return !0;
    }), l = d(() => {
      if (e.pill)
        return !0;
    }), i = d(() => {
      if (e.outline)
        return !0;
    }), a = d(
      () => {
        if (e.text)
          return !0;
      }
    ), u = d(() => {
      try {
        if (!e.link)
          return;
        let c = JSON.parse(JSON.stringify(e.link));
        if (!Object.keys(c) || !Object.keys(c).includes("href"))
          throw new Error("Attribute link is in invalid format");
        return c;
      } catch (c) {
        console.error(c);
        return;
      }
    }), _ = d(() => [
      "br-button ripple",
      e.size ? `br-button--${e.size}` : "",
      e.variant ? `br-button--${e.variant}` : "",
      o.value ? "disabled" : "",
      l.value ? "br-button--pill" : "",
      i.value ? "outline" : "",
      a.value ? "text" : ""
    ]), b = d(() => {
      switch (e.size) {
        case "small":
          return "pr-2x-small";
        case "medium":
          return "pr-small";
        case "large":
          return "pr-medium";
        default:
          return "pr-x-small";
      }
    }), v = d(() => {
      switch (e.size) {
        case "small":
          return "pl-2x-small";
        case "medium":
          return "pl-small";
        case "large":
          return "pl-medium";
        default:
          return "pl-x-small";
      }
    });
    return {
      computedDisabled: o,
      computedPill: l,
      computedOutline: i,
      computedTextButton: a,
      computedLink: u,
      rootClasses: _,
      prefixSlotSpacing: b,
      suffixSlotSpacing: v,
      onClick: (c) => {
        t("on-click", c);
      },
      onFocus: (c) => {
        t("on-focus", c);
      },
      onBlur: (c) => {
        t("on-blur", c);
      },
      emit: t
    };
  }
}), oe = ["type", "disabled"], re = ["href", "target", "download"];
function se(e, t, o, l, i, a) {
  return n(), r("button", z(e.$attrs, {
    class: e.rootClasses,
    type: e.type,
    disabled: e.computedDisabled,
    onClick: t[0] || (t[0] = (...u) => e.onClick && e.onClick(...u))
  }), [
    e.prefix ? (n(), r("div", {
      key: 0,
      class: w(e.prefixSlotSpacing)
    }, [
      (n(), f(S(e.prefix)))
    ], 2)) : h("", !0),
    e.computedLink ? (n(), r("a", {
      key: 1,
      href: e.computedDisabled ? "javascript:void(0)" : e.computedLink.href,
      target: e.computedLink.target,
      download: e.computedLink.download
    }, [
      k(e.$slots, "default")
    ], 8, re)) : k(e.$slots, "default", { key: 2 }),
    e.suffix ? (n(), r("div", {
      key: 3,
      class: w(e.suffixSlotSpacing)
    }, [
      (n(), f(S(e.suffix)))
    ], 2)) : h("", !0)
  ], 16, oe);
}
const q = /* @__PURE__ */ m(ne, [["render", se]]), le = {
  install(e) {
    e.component(q.name, q);
  }
}, ie = p({
  name: "BrInput",
  setup() {
    return {
      onClick: (t) => {
        console.log("clicou no input"), console.log(t.target);
      }
    };
  }
});
function ce(e, t, o, l, i, a) {
  return n(), r("input", {
    type: "text",
    class: "br-input",
    onClick: t[0] || (t[0] = (...u) => e.onClick && e.onClick(...u))
  });
}
const C = /* @__PURE__ */ m(ie, [["render", ce]]), ae = {
  install(e) {
    e.component(C.name, C);
  }
}, ue = p({
  name: "BrSelectItem",
  components: {
    ...M
  },
  props: {
    /**
     * item do menu select
     *@values { value: string, label: string }
     */
    item: {
      type: Object,
      default: () => ({ value: "", label: "" })
    }
  },
  setup() {
    return {
      selectValue: () => {
        console.log("selectValue");
      }
    };
  }
}), de = { key: 0 };
function pe(e, t, o, l, i, a) {
  return n(), r("li", null, [
    s("p", {
      class: "option",
      onClick: t[0] || (t[0] = (u) => e.selectValue())
    }, V(e.item.label), 1),
    e.item.button ? (n(), r("button", de)) : h("", !0)
  ]);
}
const y = /* @__PURE__ */ m(ue, [["render", pe]]), me = p({
  name: "BrSelect",
  components: {
    BrSelectItem: y,
    BrIconKeyboardArrowDown: $
  },
  props: {
    /**
     * Items of menu select dropdown
     * @values { value: string, label: string }[]
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Set label od select input
     * @values string
     */
    label: {
      type: String,
      default: () => ""
    }
  },
  setup(e) {
    return {
      setSelectValue: (o) => {
        console.log("função setSelectVaue");
      }
    };
  }
}), fe = /* @__PURE__ */ s("input", null, null, -1), $e = { class: "select-dropdown" };
function _e(e, t, o, l, i, a) {
  const u = I("BrIconKeyboardArrowDown"), _ = I("br-select-item");
  return n(), r("div", z({ ref: "BrSelect" }, e.$attrs, { class: "select" }), [
    fe,
    s("p", null, V(e.label), 1),
    s("button", null, [
      D(u)
    ]),
    (n(), f(j, { to: "body" }, [
      s("div", $e, [
        s("ul", null, [
          (n(!0), r(A, null, K(e.items, (b, v) => (n(), f(_, {
            key: `br-select-item-${v}`,
            item: b,
            onSelectedValue: e.setSelectValue
          }, null, 8, ["item", "onSelectedValue"]))), 128))
        ])
      ])
    ]))
  ], 16);
}
const x = /* @__PURE__ */ m(me, [["render", _e]]), be = {
  install(e) {
    e.component(x.name, x);
  }
}, ve = {
  install(e) {
    e.component(y.name, y);
  }
}, he = {
  install(e) {
    e.component(g.name, g);
  }
}, ge = {
  install(e) {
    e.component(B.name, B);
  }
}, Be = {
  install(e) {
    e.component($.name, $);
  }
}, O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BrButton: le,
  BrIconKeyboardArrowDown: Be,
  BrIconMenu: ge,
  BrIconSettings: he,
  BrInput: ae,
  BrSelect: be,
  BrSelectItem: ve
}, Symbol.toStringTag, { value: "Module" })), Ie = {
  install(e) {
    for (const t in O)
      e.use(O[t]);
  }
};
export {
  le as BrButton,
  Be as BrIconKeyboardArrowDown,
  ge as BrIconMenu,
  he as BrIconSettings,
  ae as BrInput,
  be as BrSelect,
  ve as BrSelectItem,
  Ie as default
};
//# sourceMappingURL=bricks-ui-lib.es.js.map
