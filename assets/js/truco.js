document.addEventListener('DOMContentLoaded', function () {
    var plus = document.querySelector('.plus');
    var items = plus.children;

    // Ocultar os itens no início
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('hidden');
    }

    plus.addEventListener('click', function () {
      plus.classList.toggle('plus-collapsed');

      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('hidden');
      }
    });
  });