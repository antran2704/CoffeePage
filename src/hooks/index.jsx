import { useEffect, useState } from "react"


const useScrollTop = () => {
    const [height,setHeight] = useState(0)


    useEffect(() => {
        const handle = () => {
            const currentHeight = document.documentElement.clientTop || window.scrollY
            setHeight(currentHeight)
        }

        window.addEventListener("scroll",handle)


    },[height])
    return height
}

export {useScrollTop}