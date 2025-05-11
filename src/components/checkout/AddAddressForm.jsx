import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";



const AddAddressForm = () => {

    const {btnLoader} = useSelector(state => state.errors)

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},  
    } = useForm({
        mode: "onTouched",
    })


        const onSaveAddressHandler = async (data) => {
        console.log("Login Click");
        dispatch(authenticateSignInUser(data,toast,reset,navigate,setLoader));
    }


return(
    <div className="">


             <div className="">
            <form
            onSubmit={handleSubmit(onSaveAddressHandler)}
            className=""
            >
             <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
             <FaAddressCard className = "mr-2 text-2xl"/>
             <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                Add Address
             </h1>
             </div>
             <div className="flex flex-col gap-4">
                <InputField
                label="Building Name"
                required
                id="building"
                type="text"
                message="*Building Name is required"
                placeholder="Enter Building Name"
                register={register}
                errors={errors}
                />


               <InputField 
                label="City"
                required
                id="city"
                type="text"
                message="*City is required"
                placeholder="Enter City"
                register={register}
                errors={errors}
                />

                <InputField 
                label="State"
                required
                id="state"
                type="text"
                message="*State is required"
                placeholder="Enter State"
                register={register}
                errors={errors}
                />

               <InputField 
                label="Pincode"
                required
                id="pincode"
                type="text"
                message="*Pincode is required"
                placeholder="Enter Pincode"
                register={register}
                errors={errors}
                />

                <InputField 
                label="Street"
                required
                id="street"
                type="text"
                message="*Street is required"
                placeholder="Enter Street"
                register={register}
                errors={errors}
                />

                      <InputField 
                label="Country"
                required
                id="country"
                type="text"
                message="*Country is required"
                placeholder="Enter Country"
                register={register}
                errors={errors}
                />

             </div>
             <button
             disabled={btnLoader}
             className="text-white bg-custom-blue px-4 py-2 rounded-md mt-4"
             type="submit"
             >
                {btnLoader ? (
                  <>
                  <Spinners />Loading...
                  </>
                ) : (
                   <>Save</>
                )}
             </button>

            </form>
            </div>
        </div>
)
}

export default AddAddressForm;