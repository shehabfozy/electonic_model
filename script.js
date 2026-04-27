document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            const contentDiv = document.getElementById(tabId);
            const pageUrl = button.getAttribute('data-page');
            
            // إزالة الفئة النشطة من الجميع
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // إضافة الفئة النشطة للزر المحدد
            button.classList.add('active');
            contentDiv.classList.add('active');
            
            // تحميل المحتوى إذا كان هناك رابط صفحة
            if(pageUrl) {
                loadPageContent(pageUrl, contentDiv);
            }
        });
    });
    
    // تحميل المحتوى من صفحة خارجية
    function loadPageContent(url, container) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                container.innerHTML = `<p>خطأ في تحميل الصفحة: ${error}</p>`;
            });
    }
});