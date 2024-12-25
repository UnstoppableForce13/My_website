// JavaScript: Add Interactivity to Yassin's Website
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeButton = document.createElement("button");
    themeButton.textContent = "Toggle Theme";
    document.querySelector("header").appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    });
});

// CSS for Dark Theme
const darkThemeStyles = document.createElement("style");
darkThemeStyles.textContent = `
    .dark-theme {
        background-color: #333;\n        color: white;
    }
    .dark-theme header {
        background-color: #4b42d1;
    }
    .dark-theme section {
        background: #444;
        color: white;
    }
    .dark-theme footer {
        background-color: #4b42d1;
    }
`;
document.head.appendChild(darkThemeStyles);
