import React from 'react'

const useMedia = media => {
  const [match, setMedia] = React.useState()

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media)
      setMedia(matches)
    }

    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}

export default useMedia
