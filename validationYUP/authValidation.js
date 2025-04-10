import * as Yup from 'yup';

export const userNameandPhoneNumberSchema = Yup.object({
    userName : Yup.string()
    .min(3 , "Atleast 3 character")
    .max(20 , "At max 20 Character")
    .required("Name must required"),
    phoneNumber : Yup.string()
                    .length(10 , "phone num must contain 10 digits")
                    .required("Phone number is required")
})

export const userMobileSchema = Yup.object({
    phoneNumber : Yup.string().length(10 , "Phone Number Must Be of 10 Digit").required("Phone Number is Required")
})

export const userOtpSchema = Yup.object({
    otp : Yup.string().length(6 , "OTP Must Be of 6 Digit").required("OTP is Required")
})

export const userPanSchema = Yup.object({
    panNumber : Yup.string().length(10 , "PAN Number of 10 Character").required("PAN Number is Required")
})

export const userAdharSchema = Yup.object({
    adharNumber : Yup.string().length(12 , "Aadhaar Number Must Be of 12 Digit").required("Aadhaar Number is required")
})

export const userAdharOtpSchema = Yup.object({
    adharOtp : Yup.string().length(6 , "OTP Must Be of 6 Digit").required('OTP is required')
})