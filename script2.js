// دالة الانتقال للصفحة التالية
function goToNextPage() {
    window.location.href = 'page3.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "جاري تدمير الملفات... 💣",
        "تم حذف نظام التشغيل... 😈",
        "انت الآن تحت سيطرتي! 💀"
    ];

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
        emoji.innerText = '😈';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = '2s';
        emoji.style.opacity = Math.random();
        matrixBg.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
    }

    setInterval(createEmoji, 500);
});
