
import * as yup from 'yup';


 const userScheme= yup.object().shape(
    {
        email:yup.string().email("invalid format").required("field is required"),
        mobileNumber:yup.string().min(1).max(10).required("field is required"),
        AddressLine1:yup.string().required("field is required"),
        AddressLine2:yup.string(),
        pincode:yup.string().max(6).required("field is required"),
        state:yup.string().required("field is required")

    }
)

const initialValues = {
    email:"",
    MobileNumber: "",
    AddressAddressLine0201: "",
    AddressAddressLine0202: "",
    Pincode : "",
    State: ""
}
const renderError = (message)=> { return(<p>{message}</p>)};

export{ userScheme , initialValues, renderError};