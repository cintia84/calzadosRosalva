document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card').forEach(card => {
        const colorRadios = card.querySelectorAll('.color-option input');
        const images = card.querySelectorAll('.product-images img');
        
        colorRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                const color = this.value;
                let imageFound = false;
                
                images.forEach(img => {
                    if(img.dataset.color === color) {
                        img.classList.add('active');
                        imageFound = true;
                    } else {
                        img.classList.remove('active');
                    }
                });
                
                if(!imageFound && images.length > 0) {
                    images[0].classList.add('active');
                }
            });
        });
    });
});