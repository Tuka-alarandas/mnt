document.getElementById('class').addEventListener('change', filterGrades);
document.getElementById('term').addEventListener('change', filterGrades);

function filterGrades() {
    const classValue = document.getElementById('class').value;
    const termValue = document.getElementById('term').value;

    // عملية تصفية العلامات بناءً على الفلاتر المحددة
    // قم بإضافة الكود هنا لعرض النتائج المصنفة
}

// Event listener for download button
document.querySelector('.download-button').addEventListener('click', function() {
    // Functionality to download grades as PDF or Excel
});

// بيانات وهمية للطلاب
const students = [
    { id: 1, name: "أحمد علي", class: "الصف الأول", subject: "الرياضيات", grade: 85, term: "الفصل الأول" },
    { id: 2, name: "سارة محمد", class: "الصف الثاني", subject: "العلوم", grade: 92, term: "الفصل الثاني" },
    { id: 3, name: "خالد أحمد", class: "الصف الأول", subject: "اللغة العربية", grade: 78, term: "الفصل الأول" },
    { id: 4, name: "ليلى محمود", class: "الصف الثالث", subject: "الإنجليزية", grade: 88, term: "الفصل الثاني" },
    { id: 5, name: "يوسف حسن", class: "الصف الثاني", subject: "التاريخ", grade: 94, term: "الفصل الأول" },
    { id: 6, name: "نور أحمد", class: "الصف الأول", subject: "الجغرافيا", grade: 80, term: "الفصل الثاني" },
    { id: 7, name: "هند علي", class: "الصف الثالث", subject: "الكيمياء", grade: 91, term: "الفصل الأول" },
    { id: 8, name: "علي يوسف", class: "الصف الثاني", subject: "الفيزياء", grade: 86, term: "الفصل الأول" },
    { id: 9, name: "ريم خالد", class: "الصف الأول", subject: "الرياضيات", grade: 89, term: "الفصل الثاني" },
    { id: 10, name: "مازن سعيد", class: "الصف الثالث", subject: "العلوم", grade: 87, term: "الفصل الأول" },
];

// دالة لإضافة البيانات إلى الجدول
function populateGrades(filteredStudents) {
    const gradesBody = document.getElementById('grades-body');
    gradesBody.innerHTML = ''; // مسح محتوى الجدول الحالي

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.subject}</td>
            <td>${student.grade}</td>
        `;
        
        gradesBody.appendChild(row);
    });
}

// دالة لتصفية العلامات بناءً على الصف والفصل الدراسي
function filterGrades() {
    const classValue = document.getElementById('class').value;
    const termValue = document.getElementById('term').value;

    const filteredStudents = students.filter(student => {
        const matchesClass = classValue === 'all' || student.class === classValue;
        const matchesTerm = termValue === 'all' || student.term === termValue;
        return matchesClass && matchesTerm;
    });

    populateGrades(filteredStudents);
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = function() {
    populateGrades(students); // عرض جميع الطلاب عند تحميل الصفحة
    document.getElementById('class').addEventListener('change', filterGrades);
    document.getElementById('term').addEventListener('change', filterGrades);
};
