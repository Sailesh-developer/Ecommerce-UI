import { ColorRing } from "react-loader-spinner"

const Spinners = () => {
    return(
        <ColorRing
  visible={true}
  height="20"
  width="20"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',]}
  />
    )
}

export default Spinners;