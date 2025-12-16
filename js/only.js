const lines = [
    "このページは急ぎで作ったけど、",
    "でも、雑じゃない",
    "時間はちゃんとかけたはず",
    "それだけ！",
    "..",
    "....",
    "......",
    "寂しいな"
];

let i = 0;
document.getElementById("more").addEventListener("click",() => {
    if (i < lines.length) {
        const p = document.createElement("p");
        p.textContent = lines[i];
        document.getElementById("box").appendChild(p);
        i++;
    }
});