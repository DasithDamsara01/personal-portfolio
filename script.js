// script.js හි ඇති 'initTypingAnimation' ශ්‍රිතය (Function) පමණක් මෙයට ප්‍රතිස්ථාපනය (Replace) කරන්න:

function initTypingAnimation() {
    const phrases = [
        'Illustration | Layout Design | Print Design',
        'NVQ Level 4 Certified Graphic Designer',
        'Color Theory | Vector Graphics expert',
        'Bringing creative concepts into reality.',
    ];
    const el = $('#typing-text');
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
        const current = phrases[phraseIdx];
        if (!deleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(tick, 2000);
                return;
            }
            setTimeout(tick, 60);
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(tick, 400);
                return;
            }
            setTimeout(tick, 30);
        }
    }
    setTimeout(tick, 1000);
}
