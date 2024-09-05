
document.addEventListener('DOMContentLoaded', function() {
    // نحصل على جميع أزرار "عرض التفاصيل" في الصفحة
    const buttons = document.querySelectorAll('.box article button');

    // إضافة حدث النقر على كل زر
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // نحصل على الفقرة (p) التي تلي الزر مباشرة
            const details = this.nextElementSibling;
            
            // تبديل العرض بين إظهار وإخفاء
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'إخفاء التفاصيل'; // تغيير نص الزر
            } else {
                details.style.display = 'none';
                this.textContent = 'عرض التفاصيل'; // إعادة نص الزر إلى الأصلي
            }
        });
    });
});
