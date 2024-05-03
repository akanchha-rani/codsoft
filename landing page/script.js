
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".section1 img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".section1 h1",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".section1 p",{
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".section1 button",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".section3 img",{
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".section3 .border",{
    ...scrollRevealOption,
    delay: 500,
});

