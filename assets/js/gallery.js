(function() {
   function openGalleryModal() {
      const galleryId = this.getAttribute('data-gallery-id');
      const gallery = document.getElementById(galleryId);
      const modalBody = document.getElementById('gallery-body');
      const modalTitle = document.getElementById('galleryModalLabel');

      document.querySelectorAll('#gallery-body > *').forEach(beforeOpened => {
         beforeOpened.style.display = 'none';
      });

      gallery.style.display = 'block';
      modalBody.appendChild(gallery);
      modalTitle.textContent = this.getAttribute('data-gallery-title');
   }

   document.querySelectorAll('.btn-event-gallery-modal').forEach(button => {
      button.addEventListener('click', openGalleryModal);
  });
}())
