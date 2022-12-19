
import * as yup from 'yup';


export const userScheme= yup.object().shape(
    {
        email:yup.string().email("invalid format").required("field is required"),
        mobileNumber:yup.string().min(10).max(10).required("field is required"),
        AddressLine1:yup.string().required("field is required"),
        AddressLine2:yup.string(),
        pincode:yup.string().min(6).max(6).required("field is required"),
        state:yup.string().required("field is required")

    }
)