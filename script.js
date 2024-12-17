// دالة الانتقال للصفحة التالية
function goToNextPage() {
    window.location.href = 'page2.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "جاري اختراق العبيط... 🤪",
        "العبيط مش عارف يعمل ايه... 🤣",
        "تم الاختراق بنجاح! 😎"
    ];

    const terminalText = document.getElementById('terminalText');
    const statusText = document.getElementById('statusText');
    let currentMessageIndex = 0;

    function updateMessage() {
        statusText.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    // تحديث الرسائل كل 2 ثانية
    updateMessage();
    setInterval(updateMessage, 2000);

    // تأثير Matrix مبسط
    const matrixBg = document.querySelector('.matrix-bg');
    
    function createEmoji() {
        const emoji = document.createElement('span');
        emoji.innerText = '😎';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = '2s';
        emoji.style.opacity = Math.random();
        matrixBg.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
    }

    // إنشاء الرموز التعبيرية بشكل أبطأ
    setInterval(createEmoji, 500);
});
