/*document.addEventListener('DOMContentLoaded', function () {
    var plus = document.querySelector('.plus')
    var items = plus.children

    // Ocultar os itens no início
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('hidden')
    }

    plus.addEventListener('click', function () {
    plus.classList.toggle('plus-collapsed')
    plus.style.backgroundColor = 'transparent'

      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('hidden')
        // plus.style.backgroundColor = '#0F0'
      }
    })
  })
  */
  document.addEventListener('DOMContentLoaded', function () {
    var plus = document.querySelector('.plus')
    // var bt = document.querySelector('.bt')
    var buttons = plus.querySelectorAll('button')

    // // Oculta os botões inicialmente
    // for (var i = 0; i < buttons.length; i++) {
    //   buttons[i].classList.add('hidden');
    // }


    //primeiro click
    plus.addEventListener('click', function () {
      plus.classList.toggle('transparent')
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('hidden')
        // console.log('primeiro click')
      }
    })



    // bt.addEventListener('click', function () {
    //     plus.classList.toggle('transparent')
  
    //     for (var i = 0; i < bt.length; i++) {
    //       bt[i].classList.remove('hidden')
    //     }
    //   })

  })