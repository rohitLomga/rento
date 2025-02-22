import { SignInAndLogInProps } from "../../Components/TextfieldProps/TextFieldProps"

export const ChangePassword = () => {
    const fields = [
        {label: "Password"},
        {label: "Confirm Password"}
    ]

    return(
        <>
            <SignInAndLogInProps
                heading1="Reset Your"
                heading2="Forgotton Password"
                headingHelper="Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is"
                fields={fields}
                buttonText="Done"
            />
        </>
    )
}