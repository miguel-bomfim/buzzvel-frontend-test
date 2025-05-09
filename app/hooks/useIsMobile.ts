import { useState, useEffect } from "react";

export const useIsMobile = () => {
	const [width, setWidth] = useState<number>(768)

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [width])

	return width < 768 ? true : false 
}