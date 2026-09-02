/* N5 Grammar Drill — 7 day plan */

const DAYS = [
{
  n: 1, theme: "Prohibition",
  points: ["ちゃいけない","じゃいけない","じゃだめ","てはいけない","ないで"],
  cards: [
    {f:"てはいけない", m:"must not; may not", ex:"ここで写真を撮ってはいけません。", en:"You must not take photos here."},
    {f:"ちゃいけない", m:"must not (spoken)", ex:"食べちゃいけない。", en:"You mustn't eat it."},
    {f:"じゃいけない", m:"must not (spoken, after んで)", ex:"飲んじゃいけない。", en:"You mustn't drink it."},
    {f:"じゃだめ", m:"must not (very casual)", ex:"入っちゃだめ。", en:"Don't go in."},
    {f:"ないで", m:"don't do; without doing", ex:"心配しないでください。", en:"Please don't worry."}
  ],
  qs: [
    {p:"How does this contract in casual speech?", t:"食べてはいけない",
     o:["食べちゃいけない","食べじゃいけない","食べないといけない","食べてもいい"], c:0,
     h:"Look at the two kana just before いけない.",
     w:"ては contracts to ちゃ. Same meaning, just faster and more casual."},
    {p:"飲んではいけない becomes 飲んじゃいけない, not 飲んちゃいけない. Why?",
     o:["飲む is an irregular verb","The te-form ends in んで, so では becomes じゃ","Drinking verbs always take じゃ","It is a negative sentence"], c:1,
     h:"Compare the te-forms: 食べて against 飲んで.",
     w:"Verbs whose te-form ends in んで — 飲んで, 読んで, 遊んで — take では, which becomes じゃ. Te-forms ending in plain て take ては, which becomes ちゃ."},
    {p:"Which is the most casual way to tell a friend not to go in?",
     o:["入ってはいけません","入ってはいけない","入っちゃだめ","入らないでください"], c:2,
     h:"Which would look wrong printed on a public sign?",
     w:"だめ is the most casual of the four. Formal down to casual: 入ってはいけません → 入ってはいけない → 入っちゃいけない → 入っちゃだめ."},
    {p:"Fill the blank: “please don't take photos.”", t:"写真を＿＿ください。",
     o:["撮らないで","撮って","撮らなくて","撮っちゃ"], c:0,
     h:"Start from the plain negative, 撮らない.",
     w:"ないで attaches straight to the plain negative: 撮る → 撮らない → 撮らないで. Add ください for a polite request."},
    {p:"What separates ないでください from てはいけない?",
     o:["ないでください asks a person; てはいけない states a rule","They are identical","ないでください is stronger and used on signs","てはいけない only works with adjectives"], c:0,
     h:"Who is speaking — a person asking, or a rule stating?",
     w:"ないでください is a personal request. てはいけない declares something is not allowed — the language of signs, rules and instructions from above."}
  ]
},
{
  n: 2, theme: "Obligation",
  points: ["ないといけない","なくてはいけない","なくてはならない","なくちゃ","なくてもいい"],
  cards: [
    {f:"ないといけない", m:"must do; have to", ex:"もう行かないといけない。", en:"I have to go now."},
    {f:"なくてはいけない", m:"must do; need to do", ex:"薬を飲まなくてはいけません。", en:"I have to take my medicine."},
    {f:"なくてはならない", m:"must do (formal, written)", ex:"規則を守らなくてはならない。", en:"One must follow the rules."},
    {f:"なくちゃ", m:"gotta do (casual)", ex:"早く寝なくちゃ。", en:"I've gotta sleep soon."},
    {f:"なくてもいい", m:"don't have to", ex:"明日は来なくてもいいです。", en:"You don't have to come tomorrow."}
  ],
  qs: [
    {p:"なくちゃ is a shortened form of what?",
     o:["なくても","なくては","ないで","ないと"], c:1,
     h:"Say なくては quickly and listen to what happens.",
     w:"なくては collapses to なくちゃ, and the いけない gets dropped entirely: 行かなくてはいけない → 行かなくちゃ."},
    {p:"What is the literal structure of 行かないといけない?",
     o:["A negative condition plus a negative result","A polite request","A past tense verb plus a suggestion","A question with a dropped particle"], c:0,
     h:"Break it at the と.",
     w:"Literally “if I don't go, it won't do.” Every one of these obligation forms is built as a double negative, which is why they all look so long."},
    {p:"Which fits a written rule or a general principle best?",
     o:["行かなくちゃ","行かなくてはならない","行かなきゃ","行かないと"], c:1,
     h:"One of these belongs in a contract, not a text message.",
     w:"ならない is the stiffest of the set and shows up in rules, laws and written instructions. いけない is the everyday spoken equivalent."},
    {p:"Complete this politely: “I have to study.”", t:"勉強＿＿いけません。",
     o:["しなくては","しないでは","するなくては","しなくても"], c:0,
     h:"する becomes しない first.",
     w:"する → しない → しなくて → しなくてはいけません. The irregular part is only the しない stem; the ending is regular."},
    {p:"明日、来なくてもいいです means:",
     o:["You must come tomorrow","You must not come tomorrow","You don't have to come tomorrow","You may come tomorrow"], c:2,
     h:"ても here grants a release, not a permission to act.",
     w:"なくてもいい removes an obligation. It never forbids — that would be 来てはいけません."},
    {p:"Which pair correctly matches the two meanings?",
     o:["食べなくてもいい = mustn't eat / 食べてはいけない = don't have to eat","食べなくてもいい = don't have to eat / 食べてはいけない = mustn't eat","Both mean the same thing","Both forbid eating"], c:1,
     h:"Where does the ない sit — before or after the て?",
     w:"This is the pair most often mixed up. なくてもいい releases you from doing it; てはいけない forbids you from doing it."}
  ]
},
{
  n: 3, theme: "Permission, advice, explanation",
  points: ["てもいい・ていい","ほうがいい","のです","んです"],
  cards: [
    {f:"てもいい", m:"may; it's okay to", ex:"窓を開けてもいいですか。", en:"May I open the window?"},
    {f:"ほうがいい", m:"had better; should", ex:"早く帰ったほうがいいですよ。", en:"You'd better go home early."},
    {f:"のです", m:"explanatory; emphasis (formal)", ex:"時間がないのです。", en:"It's that I have no time."},
    {f:"んです", m:"explanatory; emphasis (spoken)", ex:"頭が痛いんです。", en:"The thing is, my head hurts."}
  ],
  qs: [
    {p:"Complete: “May I go to the toilet?”", t:"トイレに行っ＿＿いいですか。",
     o:["ても","ないで","たら","ては"], c:0,
     h:"Te-form plus a small particle meaning “even if.”",
     w:"Te-form + もいい asks for or grants permission. ていい without the も is the casual version."},
    {p:"Which is the standard way to advise someone to go?",
     o:["行くほうがいい","行ったほうがいい","行ってほうがいい","行かほうがいい"], c:1,
     h:"The verb takes a form you would normally call past tense.",
     w:"Positive advice uses the plain past: 行ったほうがいい. It isn't talking about the past — that form simply became the fixed pattern for giving this kind of advice."},
    {p:"Now the negative: “you'd better not go.”",
     o:["行かなかったほうがいい","行かないほうがいい","行かなくてほうがいい","行かないでほうがいい"], c:1,
     h:"The negative does not follow the past-tense habit.",
     w:"Negative advice uses the plain negative, not the past: 行かないほうがいい. So positive takes た but negative takes ない — an asymmetry worth memorising outright."},
    {p:"What is the relationship between のです and んです?",
     o:["Different meanings entirely","んです is the spoken contraction of のです","のです is only for questions","んです is more formal"], c:1,
     h:"One of them is easier to say at speed.",
     w:"Same grammar, different register. の softens to ん in speech, so んです dominates conversation while のです stays in writing and formal speech."},
    {p:"Attach んです to 学生: “the thing is, I'm a student.”", t:"私は学生＿＿んです。",
     o:["だ","な","の","で"], c:1,
     h:"Nouns and na-adjectives need a connector here.",
     w:"Nouns and na-adjectives insert な: 学生なんです, 静かなんです. Verbs and i-adjectives attach directly: 行くんです, 痛いんです."},
    {p:"Why say 頭が痛いんです rather than 頭が痛いです?",
     o:["It is more grammatically correct","It explains your situation or gives a reason","It is the past tense","It makes the sentence a question"], c:1,
     h:"Think about what you want the listener to do with the information.",
     w:"んです frames the statement as an explanation — you're accounting for why you're leaving early, or asking to be excused. Plain です just reports the fact."}
  ]
},
{
  n: 4, theme: "Describing and linking",
  points: ["い-adjectives","けれども","くらい/ぐらい","と"],
  cards: [
    {f:"い-adjectives", m:"conjugate on their own, no です needed", ex:"高い → 高くない → 高かった → 高くなかった", en:"expensive / not / was / wasn't"},
    {f:"けれども", m:"but; however; although", ex:"高いけれども、買います。", en:"It's expensive, but I'll buy it."},
    {f:"くらい / ぐらい", m:"about; roughly; at least", ex:"一時間ぐらい待ちました。", en:"I waited about an hour."},
    {f:"と", m:"when; whenever (natural result)", ex:"春になると、桜が咲きます。", en:"When spring comes, the cherries bloom."}
  ],
  qs: [
    {p:"Make 高い negative.",
     o:["高いない","高くない","高じゃない","高いではない"], c:1,
     h:"The い is doing the work, so the い has to change.",
     w:"Drop the い and add くない: 高い → 高くない. I-adjectives conjugate themselves — です is only added for politeness on top."},
    {p:"Put 楽しい into the past.",
     o:["楽しいだった","楽しかった","楽しくた","楽しいでした"], c:1,
     h:"Same principle: replace the final い.",
     w:"い becomes かった: 楽しかった. Adding でした to 楽しい is the classic beginner error — 楽しかったです is the polite form."},
    {p:"いい breaks the pattern. What is its past negative?",
     o:["いくなかった","いかった","よくなかった","いいじゃなかった"], c:2,
     h:"It borrows an older stem.",
     w:"いい conjugates from よ: よくない, よかった, よくなかった. かっこいい and ちょうどいい inherit the same irregularity."},
    {p:"Which is the most casual way to say “but”?",
     o:["けれども","けれど","けど","が"], c:2,
     h:"Shorter means more casual here.",
     w:"The chain runs けれども → けれど → けど, getting more casual as it shortens. けど is what you'll hear most in conversation."},
    {p:"一時間ぐらい待ちました means:",
     o:["I waited exactly one hour","I waited about an hour","I waited more than an hour","I waited less than an hour"], c:1,
     h:"It softens the number rather than sharpening it.",
     w:"After a quantity, くらい/ぐらい means roughly that much. In other contexts it carries a “at least this much” sense, as in これぐらいはできる — I can manage at least this much."},
    {p:"What does と express in このボタンを押すと、ドアが開きます?",
     o:["A polite request","An automatic, predictable result","A past habit","A comparison"], c:1,
     h:"Could this sentence describe a machine?",
     w:"と marks a result that always follows — push the button and the door opens. It suits machines, directions and natural law, which is why it can't be followed by a command or an invitation."}
  ]
},
{
  n: 5, theme: "Time and change of state",
  points: ["まだ〜ていません","前に","もう(another)","もう(no longer)"],
  cards: [
    {f:"まだ〜ていません", m:"have not yet", ex:"まだ食べていません。", en:"I haven't eaten yet."},
    {f:"前に", m:"before; in front of", ex:"寝る前に歯を磨きます。", en:"I brush my teeth before bed."},
    {f:"もう", m:"another; one more", ex:"もう一杯ください。", en:"One more cup, please."},
    {f:"もう", m:"already / no longer (with negative)", ex:"もうお酒を飲みません。", en:"I don't drink anymore."}
  ],
  qs: [
    {p:"“I haven't eaten yet.” Which is right?",
     o:["まだ食べません","まだ食べていません","もう食べません","まだ食べませんでした"], c:1,
     h:"The action is still pending, not refused.",
     w:"まだ〜ていません describes something not done as of now, with the expectation it still might be. まだ食べません would mean you're refusing to eat for the moment."},
    {p:"Complete: “I brush my teeth before bed.”", t:"＿＿前に、歯を磨きます。",
     o:["寝る","寝た","寝て","寝ない"], c:0,
     h:"The form here never changes, whatever the tense of the sentence.",
     w:"前に always takes the plain non-past, even when the whole sentence is in the past: 寝る前に. 寝た前に is never correct."},
    {p:"Now with a noun: “before the meal.”", t:"食事＿＿前に",
     o:["を","の","に","で"], c:1,
     h:"Two nouns need joining.",
     w:"Nouns connect with の: 食事の前に, 会議の前に. Verbs attach directly with no particle."},
    {p:"You want a second cup of coffee. What do you say?",
     o:["まだ一杯ください","もう一杯ください","もういいです","一杯もういます"], c:1,
     h:"You're adding to what you already had.",
     w:"もう before a quantity means one more: もう一杯, もう一度, もう一人. Note もういいです means the opposite — that's enough, no more."},
    {p:"What does もう飲みません mean?",
     o:["I haven't drunk yet","I'll drink more","I don't drink anymore","I already drank"], c:2,
     h:"もう plus a negative flips the meaning.",
     w:"With a positive verb もう means already; with a negative it means no longer. Same word, opposite side of the change."},
    {p:"「もう宿題をしましたか。」You haven't. What's the natural reply?",
     o:["いいえ、もうです","いいえ、まだです","はい、まだです","いいえ、もうしました"], c:1,
     h:"Answer with the opposite of もう.",
     w:"まだです is the standard short reply for not yet. まだ and もう work as a pair: one asks whether the change has happened, the other says it hasn't."}
  ]
},
{
  n: 6, theme: "Particles, nominalising, requests",
  points: ["に","に/へ","にする","の (nominaliser)","をください"],
  cards: [
    {f:"に", m:"at, on, in (specific point in time)", ex:"七時に起きます。", en:"I get up at seven."},
    {f:"に / へ", m:"to (destination / direction)", ex:"京都に行きます。", en:"I'm going to Kyoto."},
    {f:"にする", m:"to decide on; I'll have", ex:"私はコーヒーにします。", en:"I'll have the coffee."},
    {f:"の", m:"turns a verb into a noun", ex:"泳ぐのが好きです。", en:"I like swimming."},
    {f:"をください", m:"please give me", ex:"水をください。", en:"Water, please."}
  ],
  qs: [
    {p:"With 行く, what's the difference between に and へ?",
     o:["に is wrong with 行く","Both work; へ leans toward direction, に toward the destination itself","へ is only for people","に is only used in writing"], c:1,
     h:"Neither is a mistake here.",
     w:"They overlap heavily with movement verbs. へ points at the heading; に points at the arrival point. へ also feels slightly softer, which is why it's common on letters and postcards."},
    {p:"Which sentence uses に correctly for a clock time?",
     o:["七時に起きます","七時で起きます","七時を起きます","七時起きますに"], c:0,
     h:"Specific times behave like fixed points.",
     w:"に marks specific times — clock times, dates, days. Vague time words like 今日, 明日 and 毎朝 take no particle at all."},
    {p:"At a café you choose the coffee. What do you say?",
     o:["コーヒーをします","コーヒーにします","コーヒーがします","コーヒーでします"], c:1,
     h:"You're settling on one option out of several.",
     w:"にする means to decide on something from a set of choices. It's what you say when ordering, which makes it one of the most immediately useful patterns on this list."},
    {p:"Complete: “I like swimming.”", t:"泳ぐ＿＿が好きです。",
     o:["の","を","に","と"], c:0,
     h:"好き needs a noun in front of が.",
     w:"の turns the verb 泳ぐ into a noun so it can take が. Without it the sentence has no subject for 好き to attach to."},
    {p:"Which is the natural way to ask for water?",
     o:["水がください","水をください","水にください","水でください"], c:1,
     h:"You're requesting an object.",
     w:"The requested item takes を. With a counter you can drop the noun entirely: 二つください."}
  ]
},
{
  n: 7, theme: "Actions, states, intentions",
  points: ["たり〜たり","たり","てある","ている","つもり","より〜ほうが"],
  cards: [
    {f:"たり〜たり", m:"doing things like A and B", ex:"読んだり書いたりしました。", en:"I did things like reading and writing."},
    {f:"たり", m:"doing things like A (one example, others implied)", ex:"公園で走ったりします。", en:"I do things like run in the park."},
    {f:"てある", m:"has been done (deliberate resulting state)", ex:"窓が開けてあります。", en:"The window has been opened."},
    {f:"ている", m:"ongoing action or current state", ex:"今、本を読んでいます。", en:"I'm reading a book now."},
    {f:"つもり", m:"plan to; intend to", ex:"来年、日本へ行くつもりです。", en:"I plan to go to Japan next year."},
    {f:"より〜ほうが", m:"A is more than B", ex:"犬より猫のほうが好きです。", en:"I like cats more than dogs."}
  ],
  qs: [
    {p:"Which form does たり attach to?",
     o:["The dictionary form","The plain past form","The te-form","The negative stem"], c:1,
     h:"Take the past plain and add one kana.",
     w:"Plain past plus り: 食べた → 食べたり, 飲んだ → 飲んだり. If you can make the past plain, you can make たり."},
    {p:"Finish this correctly: “I did things like eating and drinking.”", t:"食べたり飲んだり＿＿。",
     o:["です","しました","ました","あります"], c:1,
     h:"The list needs a verb to carry the tense.",
     w:"たり〜たり always closes with する, which carries the tense for the whole sentence. The たり forms themselves stay tenseless."},
    {p:"What does 窓が開けてあります tell you?",
     o:["The window opened by itself","Someone opened it deliberately and it's still open","Someone is opening it right now","The window is broken"], c:1,
     h:"Ask whether anyone was responsible.",
     w:"てある implies a person did it on purpose and the result remains. 窓が開いています would just describe the window as open, with no agent implied."},
    {p:"How do you say you know something?",
     o:["知ります","知っています","知りました","知っます"], c:1,
     h:"Knowing is a state you're already in.",
     w:"知る is one of a small set of verbs that need ている for the present state. 知ります would mean you're about to find out."},
    {p:"“I plan to go.” Which is right?",
     o:["行きつもりです","行くつもりです","行ったつもりです","行ってつもりです"], c:1,
     h:"Use the plain dictionary form.",
     w:"Plain non-past + つもり: 行くつもりです. For the negative, use the plain negative — 行かないつもりです, meaning you intend not to go."},
    {p:"犬より猫のほうが好きです means:",
     o:["I like dogs more than cats","I like cats more than dogs","I like both equally","I don't like either"], c:1,
     h:"Whatever follows より is the one being beaten.",
     w:"より marks the losing side, ほうが marks the winner. Read it as “compared to dogs, cats are the ones I like.”"},
    {p:"Rearrange: “Tokyo is bigger than Osaka.”",
     o:["東京より大阪のほうが大きいです","大阪より東京のほうが大きいです","東京のほうが大阪より大きいですか","大阪のほうが東京より大きいです"], c:1,
     h:"Put the smaller one after より.",
     w:"The baseline goes first with より, the winner second with ほうが. Swapping them reverses the claim entirely, so word order matters more here than usual."}
  ]
}
];

/* ---------- storage ---------- */
const KEY = "n5drill.v1";
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
let store = load();

/* ---------- helpers ---------- */
const app = document.getElementById("app");
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const hasJa = (s) => /[\u3040-\u30ff\u4e00-\u9faf]/.test(s);
const jaWrap = (s) => hasJa(s) ? `<span class="ja">${esc(s)}</span>` : esc(s);
// wrap runs of Japanese inside English prose so they render in mincho
const mark = (s) => esc(s).replace(
  /[\u3040-\u30ff\u4e00-\u9faf][\u3040-\u30ff\u4e00-\u9faf\u3001\u3002\u30fc\u301c\uff5e]*/g,
  m => `<span class="ja">${m}</span>`);

/* ---------- home ---------- */
function home(){
  document.title = "N5 Grammar Drill";
  const rows = DAYS.map(d => {
    const best = store[d.n];
    const total = d.qs.length;
    let label = `${total} questions`;
    let cls = "score";
    if (best != null){
      label = `${best}/${total}`;
      if (best === total) cls += " done";
    }
    return `<button class="day" data-day="${d.n}">
      <div class="day-top">
        <span class="num">Day ${d.n}</span>
        <span class="theme">${esc(d.theme)}</span>
        <span class="${cls}">${label}</span>
      </div>
      <div class="points">${d.points.map(p=>`<span>${esc(p)}</span>`).join("")}</div>
    </button>`;
  }).join("");

  app.innerHTML = `
    <header>
      <div class="mark">文法</div>
      <p class="sub">JLPT N5 grammar, split across seven days. Pick a day to drill it or flip through the cards.</p>
    </header>
    ${rows}
    <p class="foot">Answer, read the explanation, move on. Your best score per day is saved on this device.
    ${Object.keys(store).length ? `<br><button id="wipe" style="color:var(--muted);text-decoration:underline;text-underline-offset:4px;padding:8px 0">Clear saved scores</button>` : ""}</p>
  `;

  app.querySelectorAll(".day").forEach(b =>
    b.onclick = () => day(DAYS.find(d => d.n === +b.dataset.day)));
  const wipe = document.getElementById("wipe");
  if (wipe) wipe.onclick = () => { store = {}; save(store); home(); };
  scrollTo(0,0);
}

/* ---------- day view ---------- */
function day(d){
  let mode = "quiz";
  const render = () => {
    app.innerHTML = `
      <div class="bar">
        <button class="back" id="back">← All days</button>
      </div>
      <div class="mark" style="font-size:15px;color:var(--gold)">Day ${d.n}</div>
      <h1 style="font-size:26px;margin:6px 0 0;letter-spacing:-.02em">${esc(d.theme)}</h1>
      <div class="points" style="margin-top:12px">${d.points.map(p=>`<span>${esc(p)}</span>`).join("")}</div>
      <div class="modes">
        <button id="m-quiz" aria-pressed="${mode==="quiz"}">Quiz</button>
        <button id="m-card" aria-pressed="${mode==="cards"}">Flashcards</button>
      </div>
      <div id="slot"></div>
    `;
    document.getElementById("back").onclick = home;
    document.getElementById("m-quiz").onclick = () => { mode="quiz"; render(); };
    document.getElementById("m-card").onclick = () => { mode="cards"; render(); };
    if (mode === "quiz") quizIntro(d, document.getElementById("slot"));
    else cards(d, document.getElementById("slot"));
    scrollTo(0,0);
  };
  render();
}

function quizIntro(d, slot){
  const best = store[d.n];
  slot.innerHTML = `
    <p class="foot" style="margin-top:24px">${d.qs.length} questions.${best != null ? ` Best so far: ${best}/${d.qs.length}.` : ""}</p>
    <button class="go" id="start">Start the quiz</button>`;
  document.getElementById("start").onclick = () => quiz(d);
}

/* ---------- quiz ---------- */
function quiz(d){
  let i = 0, marks = [], picked = null;

  function draw(){
    const q = d.qs[i];
    const ticks = d.qs.map((_, k) =>
      `<span class="tick ${marks[k]===true?"hit":marks[k]===false?"miss":""} ${k===i?"now":""}"></span>`).join("");

    app.innerHTML = `
      <div class="bar">
        <button class="back" id="back">← Day ${d.n}</button>
        <div class="ticks">${ticks}</div>
      </div>
      <div class="count">Question ${i+1} of ${d.qs.length}</div>
      <p class="prompt">${esc(q.p)}</p>
      ${q.t ? `<div class="target">${esc(q.t)}</div>` : ""}
      <div class="opts" id="opts">
        ${q.o.map((o,k)=>`<button class="opt" data-k="${k}">${jaWrap(o)}</button>`).join("")}
      </div>
      ${q.h ? `<button class="hintbtn" id="hintbtn">Show a hint</button><p class="hint hide" id="hint">${esc(q.h)}</p>` : ""}
      <div id="after"></div>
    `;

    document.getElementById("back").onclick = () => day(d);
    const hb = document.getElementById("hintbtn");
    if (hb) hb.onclick = () => { document.getElementById("hint").classList.remove("hide"); hb.remove(); };
    app.querySelectorAll(".opt").forEach(b => b.onclick = () => answer(+b.dataset.k));
    scrollTo(0,0);
  }

  function answer(k){
    const q = d.qs[i];
    if (picked !== null) return;
    picked = k;
    const right = k === q.c;
    marks[i] = right;

    app.querySelectorAll(".opt").forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.c) b.classList.add("ok");
      else if (idx === k) b.classList.add("no");
      else b.classList.add("dim");
    });

    const hb = document.getElementById("hintbtn");
    if (hb) hb.remove();

    document.getElementById("after").innerHTML = `
      <div class="why">
        <div class="verdict ${right?"ok":"no"}">${right ? "Correct" : "Not this time"}</div>
        <p>${mark(q.w)}</p>
      </div>
      <button class="go" id="next">${i === d.qs.length-1 ? "See results" : "Next question"}</button>`;

    document.getElementById("next").onclick = () => {
      if (i === d.qs.length-1) return results(d, marks);
      i++; picked = null; draw();
    };
    document.getElementById("next").scrollIntoView({block:"nearest", behavior:"smooth"});
  }

  draw();
}

/* ---------- results ---------- */
function results(d, marks){
  const score = marks.filter(Boolean).length;
  const total = d.qs.length;
  if (store[d.n] == null || score > store[d.n]) { store[d.n] = score; save(store); }

  const wrong = d.qs.map((q,k) => ({q,k})).filter(x => !marks[x.k]);
  const note = score === total ? "Clean sweep."
    : score >= total - 1 ? "One to tidy up."
    : score >= total/2 ? "Solid, with gaps worth a second pass."
    : "Worth running again before moving on.";

  app.innerHTML = `
    <div class="bar"><button class="back" id="back">← All days</button></div>
    <div class="tally">${score}<small> / ${total}</small></div>
    <p class="sub">Day ${d.n} · ${esc(d.theme)} — ${note}</p>
    ${wrong.length ? `<div class="missed"><ul>${wrong.map(x=>`
      <li>
        <div class="q">${esc(x.q.p)}</div>
        <div class="a">${jaWrap(x.q.o[x.q.c])}</div>
      </li>`).join("")}</ul></div>` : ""}
    <button class="go" id="again">Run it again</button>
    <button class="alt" id="cards">Review the flashcards</button>
    <button class="alt" id="next">${d.n < 7 ? `Go to Day ${d.n+1}` : "Back to all days"}</button>
  `;
  document.getElementById("back").onclick = home;
  document.getElementById("again").onclick = () => quiz(d);
  document.getElementById("cards").onclick = () => { day(d); document.getElementById("m-card").click(); };
  document.getElementById("next").onclick = () =>
    d.n < 7 ? day(DAYS.find(x => x.n === d.n+1)) : home();
  scrollTo(0,0);
}

/* ---------- flashcards ---------- */
function cards(d, slot){
  let i = 0, open = false;
  function draw(){
    const c = d.cards[i];
    slot.innerHTML = `
      <div class="count" style="margin-top:22px">Card ${i+1} of ${d.cards.length}</div>
      <button class="card" id="card">
        <div class="front">${esc(c.f)}</div>
        ${open ? `
          <div class="mean">${esc(c.m)}</div>
          <div class="ex">${esc(c.ex)}</div>
          <div class="exen">${esc(c.en)}</div>` : `<div class="exen" style="margin-top:18px">Tap to reveal</div>`}
      </button>
      <div class="cardnav">
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      </div>`;
    document.getElementById("card").onclick = () => { open = !open; draw(); };
    document.getElementById("prev").onclick = () => { i = (i-1+d.cards.length)%d.cards.length; open=false; draw(); };
    document.getElementById("next").onclick = () => { i = (i+1)%d.cards.length; open=false; draw(); };
  }
  draw();
}

home();
