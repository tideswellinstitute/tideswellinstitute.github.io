async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error("Component failed to load:", filePath);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-slot", "header.html");
    loadComponent("footer-slot", "footer.html");
});
