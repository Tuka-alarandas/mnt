// انتظر حتى يتم تحميل كل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    // تحديد العنصر الذي يحتوي على جميع الصور في المعرض
    const carousel = document.querySelector('.carousel-images');
    // تحديد الأزرار الخاصة بالتنقل: زر السهم السابق وزر السهم التالي
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // بدء الفهرس من 0، مما يعني عرض الصورة الأولى في البداية
    let index = 0;

    // دالة لتحديث عرض الصورة بناءً على الفهرس الحالي
    function showImage(index) {
        // الحصول على عرض الصورة الفردية
        const imageWidth = carousel.querySelector('img').clientWidth;
        // تحريك العنصر الذي يحتوي على الصور إلى اليسار لعرض الصورة المحددة
        carousel.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    // عند النقر على زر السهم السابق
    prevButton.addEventListener('click', () => {
        // التحقق من أنه يمكن العودة إلى صورة سابقة (الفهرس أكبر من 0)
        if (index > 0) {
            // تقليل الفهرس لعرض الصورة السابقة
            index--;
            // تحديث عرض الصورة بناءً على الفهرس الجديد
            showImage(index);
        }
    });

    // عند النقر على زر السهم التالي
    nextButton.addEventListener('click', () => {
        // التحقق من أنه يمكن الانتقال إلى الصورة التالية (الفهرس أقل من عدد الصور - 1)
        if (index < carousel.querySelectorAll('img').length - 1) {
            // زيادة الفهرس لعرض الصورة التالية
            index++;
            // تحديث عرض الصورة بناءً على الفهرس الجديد
            showImage(index);
        }
    });
});

// انتظر حتى يتم تحميل كل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد قسم "عن" الذي سيتم إضافة تأثير عليه عند التمرير
    const aboutSection = document.querySelector('#about');
    
    // إضافة تأثير ظهور عند التمرير
    window.addEventListener('scroll', function() {
        // الحصول على موقع القسم بالنسبة للشاشة
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        // تحديد موضع الشاشة الذي يظهر فيه التأثير
        const screenPosition = window.innerHeight / 1.5;

        // التحقق مما إذا كان القسم قد ظهر في الشاشة
        if (sectionPosition < screenPosition) {
            // إضافة الكلاس "active" لتفعيل تأثيرات CSS
            aboutSection.classList.add('active');
        }
    });
});
