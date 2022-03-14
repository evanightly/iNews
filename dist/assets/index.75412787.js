import{o as d,c as h,a as e,t as o,b as p,d as v,r as _,e as g,F as f,f as b,g as w,h as y}from"./vendor.b34cf53e.js";const k=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};k();var u=(n,i)=>{const a=n.__vccOpts||n;for(const[l,t]of i)a[l]=t;return a};const N={name:"Carousel",props:{news:Array,highlight:Array}},C={id:"mainCarousel",class:"carousel slide","data-ride":"carousel"},$=e("ol",{class:"carousel-indicators"},[e("li",{"data-target":"#mainCarousel","data-slide-to":"0",class:"active"}),e("li",{"data-target":"#mainCarousel","data-slide-to":"1"}),e("li",{"data-target":"#mainCarousel","data-slide-to":"2"})],-1),x={class:"carousel-inner"},L={class:"carousel-item active"},S=["src"],A=e("div",{class:"c-overlay"},null,-1),O={class:"carousel-caption d-none d-md-block"},j={class:"carousel-item"},F=["src"],H=e("div",{class:"c-overlay"},null,-1),V={class:"carousel-caption d-none d-md-block"},q={class:"carousel-item"},B=["src"],P=e("div",{class:"c-overlay"},null,-1),T={class:"carousel-caption d-none d-md-block"},D=e("a",{class:"carousel-control-prev",href:"#mainCarousel",role:"button","data-slide":"prev"},[e("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{class:"sr-only"},"Previous")],-1),E=e("a",{class:"carousel-control-next",href:"#mainCarousel",role:"button","data-slide":"next"},[e("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{class:"sr-only"},"Next")],-1);function I(n,i,a,l,t,s){return d(),h("div",C,[$,e("div",x,[e("div",L,[e("img",{class:"d-block w-100",src:a.highlight[0].image,alt:"First slide"},null,8,S),A,e("div",O,[e("h5",null,o(a.highlight[0].title),1),e("p",null,o(a.highlight[0].contentSnippet),1)])]),e("div",j,[e("img",{class:"d-block w-100",src:a.highlight[1].image,alt:"Second slide"},null,8,F),H,e("div",V,[e("h5",null,o(a.highlight[1].title),1),e("p",null,o(a.highlight[1].contentSnippet),1)])]),e("div",q,[e("img",{class:"d-block w-100",src:a.highlight[2].image,alt:"Third slide"},null,8,B),P,e("div",T,[e("h5",null,o(a.highlight[2].title),1),e("p",null,o(a.highlight[2].contentSnippet),1)])])]),D,E])}var K=u(N,[["render",I]]);const M={name:"Header"},R=p('<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="#"><span class="text-danger">i</span>News</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" target="_blank" href="https://tribunnews.com/">Tribun News</a></li><li class="nav-item"><a class="nav-link" target="_blank" href="https://www.antaranews.com/">Antara News</a></li><li class="nav-item"><a class="nav-link" target="_blank" href="https://www.kompas.com/">Kompas</a></li><li class="nav-item"><a class="nav-link" target="_blank" href="https://www.detik.com/">Detik News</a></li></ul></div></nav>',1),z=[R];function G(n,i,a,l,t,s){return d(),h("header",null,z)}var J=u(M,[["render",G]]);const Q={name:"App",data(){return{news:[],highlight:[],isLoading:!0}},methods:{getImage(n){return this.news.data[n].image}},async mounted(){await v.get("https://berita-api-d8qkqgisu-satyawikananda.vercel.app/v1/tribun-news").then(({data:n})=>{this.highlight=n.data.filter((i,a)=>a>=0&&a<=2),this.news=n.data.filter((i,a)=>a>2)}).catch(n=>{throw n}),this.isLoading=!1},components:{Carousel:K,Header:J}},U={key:0},W={class:"container"},X={class:"col-md-12"},Y={class:"row justify-content-center justify-content-sm-center justify-content-md-between"},Z=["src"],ee={class:"card-body"},te={class:"card-title"},ae={class:"card-text"},se=["href"];function ne(n,i,a,l,t,s){const r=_("Header"),m=_("Carousel");return t.isLoading?w("",!0):(d(),h("main",U,[g(r),e("div",W,[g(m,{news:t.news,highlight:t.highlight},null,8,["news","highlight"]),e("div",X,[e("div",Y,[(d(!0),h(f,null,b(t.news,c=>(d(),h("div",{class:"card mt-5",style:{width:"21rem"},key:c.title},[e("img",{class:"card-img-top",src:c.image,alt:"Card image cap"},null,8,Z),e("div",ee,[e("h5",te,o(c.title),1),e("p",ae,o(c.contentSnippet),1),e("a",{href:c.link,class:"btn btn-dark"},"Continue Reading",8,se)])]))),128))])])])]))}var ie=u(Q,[["render",ne]]);y(ie).mount("#app");
