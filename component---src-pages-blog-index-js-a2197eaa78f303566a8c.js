(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{YZWa:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return u}));var a=r("q1tI"),n=r.n(a),i=r("vOnD"),l=r("ykqc"),o=r("ytGQ"),c=r("aAma"),m=r("eaB2"),d=i.default.div.withConfig({displayName:"blog__ArticlesGrid",componentId:"fy8dar-0"})(["display:grid;grid-gap:2.5rem;@media ","{grid-gap:1.25rem;grid-template-columns:repeat(2,1fr);}@media ","{grid-gap:2.5rem;grid-template-columns:repeat(3,1fr);}"],l.a.sm,l.a.lg);t.default=function(e){var t=e.data;return n.a.createElement(o.a,null,n.a.createElement("main",null,n.a.createElement(c.a,{main:!0,bright:!0},n.a.createElement(d,null,t.allMarkdownRemark.edges.map((function(e,t){var r=e.node;return n.a.createElement(m.a,{key:t,article:r})}))))))};var u="3343331068"},eaB2:function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var a=r("q1tI"),n=r.n(a),i=r("vOnD"),l=r("ykqc"),o=r("dntC");var c=i.default.header.withConfig({displayName:"ArticleMini__StyledArticleHeader",componentId:"sc-1i2b7ru-0"})(["figure,img{width:100%;}h1{margin:1.4rem 2.5rem 1.7rem;font-weight:500;font-size:2rem;@media ","{font-size:1.8rem;}}"],l.a.lg),m=function(e){var t=e.article;return n.a.createElement(c,null,n.a.createElement("figure",null,n.a.createElement("img",{src:"https://via.placeholder.com/500x200"})),n.a.createElement("h1",null,t.title))},d=i.default.div.withConfig({displayName:"ArticleMini__StyledArticleContent",componentId:"sc-1i2b7ru-1"})(["margin:1.4rem 2.5rem;font-size:1.6rem;font-weight:400;@media ","{font-size:1.4rem;}"],l.a.lg),u=function(e){var t=e.article;return n.a.createElement(d,{dangerouslySetInnerHTML:{__html:t.summary}})},s=i.default.article.withConfig({displayName:"ArticleMini__StyledArticleMini",componentId:"sc-1i2b7ru-2"})(["transition:background 600ms,box-shadow 300ms;background:rgba(0,0,0,0.04);color:",";position:relative;&:hover{box-shadow:0 0.3rem 1rem 0 rgba(0,0,0,0.1);background:",";cursor:pointer;}"],(function(e){return e.theme.palette.primary}),(function(e){return e.theme.colors.bright})),f=Object(i.default)(o.c).withConfig({displayName:"ArticleMini__ArticleLink",componentId:"sc-1i2b7ru-3"})(["position:absolute;top:0;right:0;bottom:0;left:0;"]);t.a=function(e){var t=e.article,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["article"]);return n.a.createElement(s,r,n.a.createElement(m,{article:t.frontmatter}),n.a.createElement(u,{article:t.frontmatter}),n.a.createElement(f,{to:t.fields.slug},n.a.createElement("span",{className:"srOnly"},"Go to article")))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-a2197eaa78f303566a8c.js.map