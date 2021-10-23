
new Swiper('.slider__content',{
    loop: true,
    //стрелки
    navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
    }, keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    //навигация
    //буллеты, текущие положения
    pagination: {
        el: '.swiper-pagination',
        //буллеты
        clickable:true,
        //динамические булеты
       /* dynamicBullets:true,*/
    } ,
    //управление клавиатурой
   keyboard: {
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
   },
   //управление мышью
   /*mousewheel: {
       sensitivity:1,
       eventsTarget: ".image-slider"
   },*/
   //автовысота
   autoHeight: true,
    //автопрокрутка
    });
    //гамбургер
(function(){
    const menuToggle = document.querySelector('.js-menu-toggle')
    const menuItems = document.querySelectorAll('.js-menu-item')
    const menuContent = document.querySelector('.js-menu-content')

    if(menuToggle && menuContent && menuItems.length){
        function openMenu(){
            menuToggle.classList.add('active')
            menuContent.classList.add('active')
        }
        function closeMenu(){
            menuToggle.classList.remove('active')
            menuContent.classList.remove('active')
        }
        function toggleMenu(){
            if(menuToggle.classList.contains('active')){
                closeMenu()
            } else{
                openMenu()
            }
        }
        function resizeHandler(){
            if(window.innerWidth >= 768){
                closeMenu()
            }
        }
        menuToggle.addEventListener('click', toggleMenu)
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenu)
        })
        window.addEventListener('resize', resizeHandler)
    }
}());
  (function () {
    const header = document.querySelector('.header')
    const firstSection = document.querySelector('.slider')
    let headerHeight = firstSection.clientHeight
    
    if (header && headerHeight) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > headerHeight) {
        header.classList.add('header--dark')
      } else {
        header.classList.remove('header--dark')
      }
    })}
    window.addEventListener('resize', ()=>{
      headerHeight = firstSection.clientHeight
    })
}());
/*модальное окно*/
const modal = document.querySelector('.js-modal')
        const openBtn = document.querySelector('.js-open-modal')
        const closeBtn = document.querySelector('.js-close-modal')
		const body = document.body
		
        if(modal && openBtn && closeBtn){
            modal.addEventListener('click', (e)=>{
                const target = e.target
                if(target === modal || target === closeBtn){
                    modal.classList.remove('active')
					body.classList.remove('active')
                }
            })
            openBtn.addEventListener('click', ()=>{
                modal.classList.add('active')
				body.classList.add('active')
            })

        } 