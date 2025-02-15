import { Stack } from "@mui/material"
import { SignInAndLogInProps } from "../../Components/TextfieldProps/TextFieldProps"

export const SignIn = () => {

    const fields = [
        {label: "Contact No. / Email"},
        {label: "Password"}
    ]
    return(
        <Stack>
            <SignInAndLogInProps 
                heading1="Sign In"
                heading2=" To Your Account"
                headingHelper="Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is"
                fields={fields}
                buttonText="Sign In"
                textUnderButton="Forgotton Your Password ?"
                rightSideBoxText="Yes"
            />
        </Stack>
    )
}