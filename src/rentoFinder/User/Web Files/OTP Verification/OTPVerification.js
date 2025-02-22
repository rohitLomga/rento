import { Stack } from "@mui/material"
import { SignInAndLogInProps } from "../../Components/TextfieldProps/TextFieldProps"

// Sign up OTP Verification
export const OTPVerification = () => {

    const fields = [
        {label: "OTP", helperText: "Resend OTP*"}
    ]
    return(
        <Stack>

            <SignInAndLogInProps
                heading1="OTP Verification"
                headingHelper="Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is"
                fields={fields}
                buttonText="SUBMIT"
            />
        </Stack>
    )
}