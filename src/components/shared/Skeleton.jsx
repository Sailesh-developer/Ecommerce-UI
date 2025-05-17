import React from "react"
import { Skeleton } from "@mui/material"



const Skeletons = () => {

    const skeletons = [
    <Skeleton variant="rectangular" width={300} height={60}/> , 
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={300} />
                    ]


   const showSkeletons = [] 
   
   for(let i=0; i < 5 ; i++) {
              skeletons.map((skeleton , index) => (
      showSkeletons.push(React.cloneElement(skeleton, { key: `${i}-${index}`}))
              ))
}


    return(
           <>
           {showSkeletons}
           </>
    )
}

export default Skeletons;