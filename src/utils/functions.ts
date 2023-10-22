export const getThemeFromStorage = () => {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") || "light";
    }

    if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
};
