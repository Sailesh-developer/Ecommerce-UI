import { Skeleton } from "@mui/material";
import React from "react";
import { FaAddressBook } from "react-icons/fa";

const AddressInfo = () => {

    const noAddressExist = true;
    const isLoading = false;

    const skeletons = [
    <Skeleton variant="rectangular" width={400} height={60}/> , 
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={400} />
                    ]


   const showSkeletons = [] 
   
   for(let i=0; i < 5 ; i++) {
              skeletons.map((skeleton , index) => (
      showSkeletons.push(React.cloneElement(skeleton, { key: `${i}-${index}`}))
              ))
}

    return(
        <div className="pt-4">
            {noAddressExist ? (
                 <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
                   <FaAddressBook size={50} className="text-gray-500 mb-4" />
                      <h1 className="mb- 2 text-slate-900 text-center font-semibold text-2xl">
                        No address added yet
                    </h1>
                      <p className="mb-6 text-slate-800 text-center">
                       Please add your address to complete purchase
                    </p>
                 </div>
            ) : (
                  <div className="relative p-6 rounded-lg max-w-md mx-auto">
                    <h1 className="text-slate-800 text-center font-bold text-2xl">
                        Select Address
                    </h1>

                  {isLoading ? (
                    <div className="py-8 px-2">
                       {showSkeletons}
                      </div>
                  ) : (
                    <div className=""> 
                      Address list here...
                    </div>
                  )
                  }

                  </div>
            )
        
        
        }
        </div>
    )
}

export default AddressInfo;