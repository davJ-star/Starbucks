const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, 6, {
      opacity:0,
      display: 'none'
    })

    
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 6, {
      opacity:1,
      display: 'block'
    })
  }
}, 300))
// _.throttle(함수, 시간)
const fadeEls = document.querySelectorAll("fade-in")
fadeEls.forEach((fadeEl, index)=>{
  gsap.to(fadeEl, 6, {
    delay: index * 0.7,
    opacity: 1;
  })
})




























