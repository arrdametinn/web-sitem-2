console.log("JS çalışıyor");

document.addEventListener("DOMContentLoaded", () => {

    const hakkindaBtn = document.getElementById("hakkinda-btn");
    const hakkindaDiv = document.getElementById("hakkinda-div");

    if (hakkindaBtn && hakkindaDiv) {
        hakkindaBtn.addEventListener("click", () => {
            const isHidden =
                hakkindaDiv.style.display === "none" ||
                hakkindaDiv.style.display === "";

            hakkindaDiv.style.display = isHidden ? "block" : "none";
            hakkindaBtn.textContent = isHidden
                ? "Hakkında Kapat"
                : "Hakkında Göster";
        });
    }

    const projeItems = document.querySelectorAll("#projelerim li");
    projeItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`Proje: ${item.textContent}`);
        });
    });

    const form = document.getElementById("iletisim-formu");
    if (form) {
        form.addEventListener("submit", e => {
            const ad = document.getElementById("ad").value.trim();
            if (!ad) {
                e.preventDefault();
                alert("Lütfen adınızı girin.");
            }
        });
    }

});
// Scroll animasyonu
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Dark mode
const darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
