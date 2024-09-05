document.addEventListener('DOMContentLoaded', function() {
    // نحصل على جميع الأزرار التي تحتوي على الفئة "more"
    const buttons = document.querySelectorAll('.more');

    // نمر عبر كل زر ونضيف مستمع الحدث
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // نحصل على الديف الذي يحتوي على الصور داخل هذا البرنامج الدراسي
            const program = button.parentElement; 
            const images = program.querySelector('.program-images');

            // التبديل بين إظهار وإخفاء الصور وتغيير نص الزر
            if (images.style.display === 'none' || images.style.display === '') {
                images.style.display = 'flex'; // إظهار الصور باستخدام flexbox
                button.textContent = 'إخفاء المقتطفات'; // تغيير نص الزر
            } else {
                images.style.display = 'none'; // إخفاء الصور
                button.textContent = 'مقتطفات'; // تغيير نص الزر
            }
        });

        // إخفاء الصور بشكل افتراضي عند تحميل الصفحة
        const images = button.parentElement.querySelector('.program-images');
        images.style.display = 'none';
    });
});

