const msgs = [
    "......",
    "何も起きていないはず...",
    "多分...",
    "押してくれてありがとう！",
    "...意味ないってば！！",
    "いつまで押すの？",
    "これ以降何も出てこないよ～",
    "フリでした。",
    "めっちゃ押すね！？",
    "私もびっくりだよ！",
    "押してくれてありがとう！おしまい！"
];

let n = 0;

document.getElementById("nothingBtn").addEventListener("click",() => {
    if (n == 1){
        alert("気が済むまで押したら、下までスクロールしてみるのもいいんじゃないかな。");
    }

    if (n < msgs.length) {
        document.getElementById("nothingText").textContent = msgs[n];
        n++;
    }
});

let taps = 0;
const tapText = document.getElementById("tapText");

tapText.addEventListener("click",() => {
    taps++;

    if (taps === 3){
        tapText.textContent = "よく触ってくれるね！"
    }
    if (taps === 6){
        tapText.textContent = "特に意味はないよ～"
    }
    if (taps === 9){
        tapText.textContent = "ありがとう！"
    }
});

let count = 0;
const element = document.getElementById("hold");
element.addEventListener("click", () => {
  count++;
  if (count === 5) {
        document.getElementById("holdText").textContent = "え！？これでコードの半分も書けてないの！？絶望しながらも書いたから最後まで見てくれると全俺が泣きます。" 
       
  }
});




const special = "0510";
const dad = "0901";
const me = "0119";
const secret = document.getElementById("secret")

document.getElementById("key").addEventListener("input",(e) =>{
    if (e.target.value === special){
        secret.textContent = "ちゃんと用意してあるよ！";
        setTimeout(() => {
            location.href = "only.html";
        },1000);
    } else if (e.target.value === dad){
        secret.textContent = "パパだね！？ご自由にご見学ください！！！！！";
    }else if (e.target.value === me){
        secret.textContent = "サイトを作った本人ですね。さっさと寝ろ。"; 
    }else {
        secret.textContent = "画面の向こうのあなたが誰か知りませんが！！遊んでってください！！！！";
    }
});

let scrolled = false;

window.addEventListener("scroll",() => {
    if (!scrolled && window.scrollY > 300){
        scrolled = true;
        document.getElementById("scrollMsg").textContent = "本当にスクロールしてくれたんだ！ありがとう！"
        document.getElementById("only").style.display = "block";
    }
});
