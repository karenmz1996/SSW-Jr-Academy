/* Visual previews and the "First look" ad mockups. Each VIS entry is keyed by quest id. */
/* o1, o3, o4 and o5 are ready for the Onboarding lessons once that module stops being a placeholder. */
const PLUM='#4B2A6B', BLUSH='#F3C9D3';
const mk=(bg,fg)=>`<span class="mk" style="background:${bg};color:${fg}">N</span>`;
const postHead=(name,bg=PLUM,fg=BLUSH)=>`<div class="post-h">${mk(bg,fg)}<div><b>${name}</b><small>Sponsored</small></div></div>`;
const playI=`<span class="playi">${'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'}</span>`;
const CREATIVES=[
 {id:'a',m:'Static · 1:1 · Feed',bad:true,why:'The “results guaranteed” badge is a claim no clinic can make. It’s a compliance risk and a likely Meta rejection, even if the headline looks fine.',
  html:()=>`<div class="post">${postHead('Nova Skin Studio')}<div class="post-t">Book a free consultation in Las Vegas.</div>
   <div class="media r11" style="background:${PLUM};color:${BLUSH}"><span class="hl" style="font-size:19px">Glowing skin after your very first session</span><span class="badge-claim" style="background:${BLUSH};color:${PLUM}">Results guaranteed</span></div>
   <div class="post-c"><span>novaskin.example</span><b>Book now</b></div></div>`},
 {id:'b',m:'Video · 9:16 · Stories',bad:false,why:'Good to go: 9:16 for Stories, text clear of the top and bottom zones, a results disclaimer, and a CTA that matches the consultation form.',
  html:()=>`<div class="story"><span class="bar-top"></span><span class="who"><span class="mk">N</span>Nova Skin Studio · Sponsored</span>
   <div class="fill" style="background:linear-gradient(160deg,#6b3f8f,#1d0f2a)">${playI}<span class="hl" style="font-size:14px;color:${BLUSH}">“I stopped hiding my skin.”</span><span style="font-size:7.5px;margin-top:6px;opacity:.8">Actual client. Results may vary.</span></div>
   <span class="pill">Book your free consultation</span></div>`},
 {id:'c',m:'Static · Stories',bad:true,why:'A 1:1 static was uploaded to a 9:16 placement. It shows letterboxed with black bars, and the CTA covers the bottom of the image. Stories needs its own 9:16 asset.',
  html:()=>`<div class="story"><span class="bar-top"></span><span class="who"><span class="mk">N</span>Nova Skin Studio · Sponsored</span>
   <div class="sq" style="background:${PLUM};color:${BLUSH}"><span class="hl" style="font-size:13px">Summer-ready skin starts with one visit</span><span style="font-size:8px;margin-top:4px">Free consultation</span></div>
   <span class="pill">Learn more</span></div>`},
 {id:'d',m:'Carousel · 1:1 · Feed',bad:true,why:'Off-brand: the cards use the retired teal and orange palette and the old serif wordmark. Compare with the brand kit: plum and blush, with the round N mark.',
  html:()=>`<div class="post">${postHead('Nova Skin Studio','#1F6F6B','#fff')}<div class="post-t">3 treatments, 1 visit. Swipe to see how.</div>
   <div class="carousel"><div class="media r11" style="background:#1F6F6B;color:#fff"><span style="font-family:Georgia,serif;font-size:11px;letter-spacing:.08em">NOVA SKIN CLINIC</span><span class="hl" style="font-size:17px;margin-top:8px;color:#E8863A">Laser. Peel. Glow.</span></div><div class="media r11" style="background:#E8863A;color:#fff"><span class="hl" style="font-size:15px">Peel</span></div></div>
   <div class="post-c"><span>novaskin.example</span><b>Book now</b></div></div>`},
 {id:'e',m:'Video · 4:5 · Feed',bad:true,why:'The CTA says “Shop now”, but the funnel is a free consultation form. The client doesn’t sell online, so the ad promises something the landing page can’t deliver.',
  html:()=>`<div class="post">${postHead('Nova Skin Studio')}<div class="post-t">Even, clear skin without downtime.</div>
   <div class="media r45" style="background:linear-gradient(170deg,#5b3480,#22122f);color:${BLUSH}">${playI}<span class="hl" style="font-size:18px">Your skin, finally even.</span></div>
   <div class="post-c"><span>novaskin.example</span><b>Shop now</b></div></div>`},
 {id:'f',m:'Static · 4:5 · Feed',bad:false,why:'Good to go: on-brand, the right ratio for Feed, a before/after with the required disclaimer, and a CTA that matches the funnel.',
  html:()=>`<div class="post">${postHead('Nova Skin Studio')}<div class="post-t">Real clients, real results. Start with a free consult.</div>
   <div class="media r45" style="padding:0;flex-direction:row;background:${BLUSH};color:${PLUM}"><div style="flex:1;align-self:stretch;display:grid;place-items:center;background:#e8b9c5;font-weight:700;font-size:12px">Before</div><div style="flex:1;align-self:stretch;display:grid;place-items:center;font-weight:700;font-size:12px">After</div><span class="disc">Actual client. Results may vary.</span></div>
   <div class="post-c"><span>novaskin.example</span><b>Book consultation</b></div></div>`}
];
const CTX=`<div class="ctx-strip">
 <div class="ctx"><b>Brand kit</b><div class="kit"><span class="mark">N</span><span style="color:var(--ink);font-weight:600">Nova Skin Studio</span></div><div class="sw"><i style="background:${PLUM}"></i><i style="background:${BLUSH}"></i></div>Sans type only.</div>
 <div class="ctx"><b>Funnel</b><div class="flow"><span>Ad</span>→<span>Free consult form</span>→<span>Setter call</span>→<span>Booked</span></div>Nothing is sold online.</div>
 <div class="ctx"><b>Rules</b>Feed: 1:1 or 4:5. Stories and Reels: 9:16. Claims about results need “Results may vary.”</div></div>`;

const VIS={
 o3:()=>`<div class="docm"><h5>Account map · example account</h5>
  <div class="row"><span>Offer</span><span>High-ticket telehealth coaching for men 40–65</span></div>
  <div class="row"><span>ICP</span><span>Executives who’ve tried gyms and diets, want a supervised plan</span></div>
  <div class="row"><span>Funnel</span><span class="chips"><i>Meta ad</i>→<i>VSL</i>→<i>Application</i>→<i>Sales call</i>→<i>Sale</i></span></div>
  <div class="row"><span>Primary KPI</span><span><span class="hl-y">Sales</span>, CAC floor tied to 90-day break-even</span></div>
  <div class="row"><span>Stakeholders</span><span>Founder decides and approves creatives · COO closes · CSM tracks health</span></div></div>`,
 o5:()=>`<div class="tl">
  <div><span class="d">Pre-kickoff</span><b>Access & schedule</b>Verify platform access, share it with cross-functionals, book KickOff.</div>
  <div><span class="d">Day 1</span><b>KickOff</b>Recap, recording and next steps the same day.<span class="hub">Date → Hub</span></div>
  <div><span class="d">Day 2</span><b>Internal KickOff</b>Recap and audit roadmap. Audit tasks in ClickUp.</div>
  <div><span class="d">Days 3–8</span><b>Audits</b>Review each audit, then share it with the client.</div>
  <div><span class="d">Day 10</span><b>Game Plan</b>30/60/90 plan and recap.<span class="hub">Date → Hub (triggers NPS)</span></div></div>`,
 o1:()=>`<div class="cu"><span class="t">Example account — Create first batch of statics</span>
  <div class="fields"><span class="f req"><b>Client</b>Example account</span><span class="f req"><b>Department</b>Creative</span><span class="f req"><b>Pod</b>Gamma</span><span class="f"><b>Status</b>Backlog</span></div>
  <span class="att">\u{1F4CE} best-performing-ads-analysis.xlsx</span>
  <div class="sub"><span style="color:#777;font-size:11px">SUBTASK</span><span>Brief by Creative Strategy</span><div class="fields"><span class="f req"><b>Client</b>Example account</span><span class="f req"><b>Department</b>Creative</span><span class="f req"><b>Pod</b>Gamma</span></div></div></div>
  <p class="qd" style="margin:10px 0 0">Highlighted fields are the ones Ops checks. The subtask needs them too.</p>`,
 o4:()=>`<div class="teams">
  <div><b>Creative</b>Angles, concepts, batch strategy</div><div><b>Copy</b>Ad copy, emails, automation text</div><div><b>Design</b>Statics, carousels, edits</div><div><b>Funnels & CRM</b>Pipelines, automations, forms</div>
  <div><b>CRO</b>Landing page tests</div><div><b>Martech</b>Tracking, CAPI, integrations</div><div><b>Performance</b>Campaigns, budgets, reporting</div><div><b>You, the AM</b>Create the task and own the follow-through</div></div>
  <div class="own"><span>AM creates the task</span>→<span>Team writes the brief and executes</span>→<span>AM QAs and tells the client</span></div>`,
 q21:()=>`<div class="cu"><span class="t">Example account — Batch Briefing AM + PM</span>
  <div><b>Brief objective:</b> foundational assets</div>
  <div class="fields"><span class="f">☐ TOF</span><span class="f">☐ MOF</span><span class="f">☐ BOF</span><span class="f req">☑ N/A</span></div>
  <div><b>Ad campaign details:</b> key event is a booked call.</div>
  <div class="sub"><span style="color:#777;font-size:11px">CHECKLIST</span>
   <span class="ck"><i></i>Define # of ads</span><span class="ck"><i></i>Confirm performance report is updated</span><span class="ck"><i></i>Provide ad campaign details</span><span class="ck"><i></i>Update resources</span></div></div>`,
 q23:()=>`<table class="dt"><thead><tr><th>Ad</th><th>CPL</th><th>Leads</th><th>CTR</th><th>Call</th></tr></thead><tbody>
  <tr><td>Myth-bust, UGC</td><td>$18.7</td><td>124</td><td>2.0%</td><td><span class="dc it">Iterate</span></td></tr>
  <tr><td>Founder story</td><td>$20.1</td><td>196</td><td>3.9%</td><td><span class="dc it">Iterate</span></td></tr>
  <tr><td>Price anchor</td><td>$21.5</td><td>73</td><td>3.8%</td><td><span class="dc wa">Watch</span></td></tr>
  <tr><td>Seasonal promo</td><td>$71.0</td><td>4</td><td>2.3%</td><td><span class="dc wa">Too early</span></td></tr>
  <tr><td>Generic static</td><td>$64.0</td><td>38</td><td>0.6%</td><td><span class="dc cut">Cut</span></td></tr></tbody></table>
  <p class="qd" style="margin:10px 0 0">An ad with 4 leads isn’t a loser yet, it’s noise. Cut what has volume and still underperforms.</p>`,
 q24:()=>`<div class="secs">${['Request','Goal','Context','Systems in scope','Audience & volume','What exists','Deadlines','Inputs','Subtask structure','Not needed','Do not touch','Done when'].map((s,i)=>`<div><span>${String(i+1).padStart(2,'0')}</span><b>${s}</b></div>`).join('')}</div>`,
 q25:()=>`<div class="slack"><span class="av2">AM</span><div><span class="nm">Jr AM<small>4:29 PM</small></span>
  <p><b>New Laser Batch</b></p><p>Hi <span class="mn">@Client</span>, sharing the new batch.</p>
  <ul><li><a>Statics</a></li><li><a>Carousel</a></li><li><a>Videos</a></li></ul>
  <p>The goal is to run two tests side by side: add location callouts to two proven angles, and test a new angle built around customer reviews.</p>
  <p>Could you leave feedback in Drive by Thursday?</p><p>cc <span class="mn">@Sr AM</span> <span class="mn">@PM</span></p></div></div>`
};

/* Check capacity before you commit: the week as the Creative team sees it */
VIS.q26=()=>`<div class="wk">${[
  ['Mon','Other pod: batch','busy'],['Tue','Other pod: LP','busy'],['Wed','','free'],['Thu','','free'],['Fri','','free']
 ].map(([d,t,c])=>`<div class="wkd ${c}"><span class="mono">${d}</span>${t?`<b>${t}</b>`:'<i>Open slot</i>'}</div>`).join('')}</div>
 <p class="qd" style="margin:12px 0 8px">Creative capacity: one task or project per day, plus feedback on other briefs.</p>
 <div class="reqs">
  <div class="req-i"><span class="dc cut">High</span><b>Refresh for a fatiguing campaign</b><span>Client asked for it “by Tuesday”</span></div>
  <div class="req-i"><span class="dc wa">Medium</span><b>Seasonal batch</b><span>Needs to launch next week</span></div>
  <div class="req-i"><span class="dc it">Low</span><b>Landing page tweaks</b><span>No hard date</span></div>
 </div>`;

/* Close the launch loop: the 48-hour check after approval */
VIS.q27=()=>`<div class="cu"><span class="t">Seasonal batch — Launch check (48 h after approval)</span>
  <div class="sub" style="border-top:0;padding-top:0">
   <span class="ck"><i></i>Live in Ads Manager: 6 of 6 ads active</span>
   <span class="ck off"><i></i>In the performance report: 4 of 6 → ask the PM about the 2 missing</span>
   <span class="ck"><i></i>Task updated with the positioning the client approved</span>
   <span class="ck off"><i></i>Internal update posted, PM and Creative strategist tagged</span>
  </div></div>
 <div class="slack" style="margin-top:12px"><span class="av2">AM</span><div><span class="nm">Jr AM<small>internal channel</small></span>
  <p>Seasonal batch is live: 6 of 6 ads active. 2 aren’t in the report yet, <span class="mn">@PM</span> can you check the naming? Task updated with the approved positioning.</p>
  <p>cc <span class="mn">@Creative strategist</span></p></div></div>`;
