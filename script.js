// تبديل الأيام
const tabs = document.querySelectorAll('.day-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // هنا نقدر نضيف فلترة المواد لاحقاً
    });
});

// وظيفة دخول لوحة التحكم بكلمة السر
function loginToAdmin() {
    const password = prompt("أدخلي كلمة السر للمتابعة:");
    if (password === "ahd2026") {
        alert("أهلاً بكِ يا عهد، جاري الدخول للوحة التحكم...");
        // توجيه لصفحة لوحة التحكم
    } else {
        alert("كلمة السر غير صحيحة!");
    }
}
