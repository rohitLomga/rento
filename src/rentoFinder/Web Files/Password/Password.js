import { Stack } from "@mui/material"
import { SignInAndLogInProps } from "../../Components/TextfieldProps/TextFieldProps"

// Sign in Password
export const Password = () => {

    const fields = [
        {label: "Password*", type: "Password"},
        {label: "Confirm Password*", type: "Password"}
    ]

    return(
        <Stack>
            <SignInAndLogInProps
                heading1="Create Your"
                heading2="Password"
                headingHelper="Lorem Ipsum is simply dummy text of the andtypesetting industry. Lorem Ipsum is"
                fields={fields}
                buttonText="Done"
            />
        </Stack>
    )
}