import { SignInAndLogInProps } from "../../Components/TextfieldProps/TextFieldProps"

export const ResetPassword = () => {
    const fields = [
        {label: "Email"},
        {label: "OTP", helperText: "Resend OTP*"}
    ]

    return(
        <>
            <SignInAndLogInProps
                heading1="Reset Your"
                heading2="Forgotton Password"
                headingHelper="Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is"
                buttonText="Reset"
                fields={fields}
            />

        </>
    )
}