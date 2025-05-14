// Script sederhana untuk elemen interaktif
document.addEventListener('DOMContentLoaded', function() {
    // Anda bisa menambahkan fungsi JavaScript di sini
    console.log('Website portfolio telah dimuat');
    
    // Contoh: Scroll halus untuk tautan
    document.querySelectorAll('a[href^="#"]').forEach(tautan => {
        tautan.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
