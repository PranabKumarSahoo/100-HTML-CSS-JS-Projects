const toastBtn = document.getElementById("showToast");
const toast = document.getElementById("toast");

toastBtn.addEventListener("click", () => {
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Toast will hide after 3 seconds
});

// Get Source Code - GitHub/Telegram(Link in Bio)