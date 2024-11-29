import CustomSocialButton from "@/app/components/forms/theme-elements/CustomSocialButton";
import { Stack } from "@mui/system";
import { Avatar, Box } from "@mui/material";
import { signInType } from "@/app/(DashboardLayout)/types/auth/auth";
import { signIn } from 'next-auth/react';

const AuthSocialButtons = ({ title }: signInType) => {
  const handleGoogleSignIn = async () => {
    await signIn('google');
  };
  const handleGithubSignIn = async () => {
    await signIn('github');
  };
   return(
    <>
    <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
      <CustomSocialButton onClick={handleGoogleSignIn}>
        <Avatar
          src={"/images/svgs/google-icon.svg"}
          alt={"icon1"}
          sx={{
            width: 16,
            height: 16,
            borderRadius: 0,
            mr: 1,
          }}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            whiteSpace: "nowrap",
            mr: { sm: "3px" },
          }}
        >
          {title}{" "}
        </Box>{" "}
        Google
      </CustomSocialButton>
      <CustomSocialButton onClick={handleGithubSignIn}>
        <Avatar
          src={"/images/svgs/git-icon.svg"}
          alt={"icon2"}
          sx={{
            width: 16,
            height: 16,
            borderRadius: 0,
            mr: 1,
          }}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            whiteSpace: "nowrap",
            mr: { sm: "3px" },
          }}
        >
          {title}{" "}
        </Box>{" "}
        Github
      </CustomSocialButton>
    </Stack>
  </>
   )

};

export default AuthSocialButtons;
