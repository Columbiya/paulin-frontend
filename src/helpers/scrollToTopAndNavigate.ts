import { animateScroll as scroll } from 'react-scroll'

export const scrollToTopAndNavigate = (callback: () => void) => {
  if (window.pageYOffset === 0) {
    return callback()
  }

  scroll.scrollToTop({
    duration: 500,
  })

  setTimeout(() => {
    callback()
  }, 600)
}
