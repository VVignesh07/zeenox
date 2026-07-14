(()=>{var e={};e.id=608,e.ids=[608],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},98131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>p,serverHooks:()=>c,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>u});var n={};r.r(n),r.d(n,{GET:()=>d});var i=r(42706),a=r(28203),s=r(45994),o=r(39187);async function d(){let e="https://zeenox.agency",t=[{title:"Rebuilt web presence for a UK-based charity",description:"Healthcare Marketing Agency Case Study: Improving accessibility and lead capture by 140%.",url:`${e}/work`,date:new Date().toUTCString()},{title:"10th-anniversary campaign design for a special-needs rehabilitation center",description:"Clinic Marketing Case Study: Digital rollout and branding.",url:`${e}/work`,date:new Date().toUTCString()},{title:"ZeenOx Internship Program",description:"Join ZeenOx's structured internship program and get hands-on experience in Video Editing, Marketing, and Web Development.",url:`${e}/internship`,date:new Date().toUTCString()}],r=`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>ZeenOx Digital Agency - Insights &amp; Work</title>
      <link>${e}</link>
      <description>Latest case studies, insights, and news from ZeenOx Media, Tech, and Automation.</description>
      <language>en</language>
      <atom:link href="${e}/feed.xml" rel="self" type="application/rss+xml"/>
      ${t.map(e=>`
        <item>
          <title>${e.title}</title>
          <link>${e.url}</link>
          <guid isPermaLink="true">${e.url}</guid>
          <description>${e.description}</description>
          <pubDate>${e.date}</pubDate>
        </item>`).join("")}
    </channel>
  </rss>`;return new o.NextResponse(r,{headers:{"Content-Type":"application/xml"}})}let p=new i.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/feed.xml/route",pathname:"/feed.xml",filename:"route",bundlePath:"app/feed.xml/route"},resolvedPagePath:"D:\\zeenox\\src\\app\\feed.xml\\route.ts",nextConfigOutput:"",userland:n}),{workAsyncStorage:l,workUnitAsyncStorage:u,serverHooks:c}=p;function g(){return(0,s.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:u})}},96487:()=>{},78335:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[989,452],()=>r(98131));module.exports=n})();