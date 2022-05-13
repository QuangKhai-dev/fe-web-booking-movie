import React from 'react'

function useScrollApp<T>() {
  const [scrollTop, setScrollTop] = React.useState(0)

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollTop }
}
export default useScrollApp
