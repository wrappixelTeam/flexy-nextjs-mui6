import Grid from "@mui/material/Grid2";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import ParentCard from "@/app/components/shared/ParentCard";
import ChildCard from "@/app/components/shared/ChildCard";
import ClickPopover from "@/app/components/ui-components/popover/ClickPopover";
import HoverPopover from "@/app/components/ui-components/popover/HoverPopover";

import ClickPopoverCode from "@/app/components/ui-components/popover/code/ClickPopoverCode";
import HoverPopoverCode from "@/app/components/ui-components/popover/code/HoverPopoverCode";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Popover",
  },
];

const MuiPopover = () => {
  return (
    (<PageContainer title="Popover" description="this is Popover">
      {/* breadcrumb */}
      <Breadcrumb title="Popover" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Popover">
        <Grid container spacing={3}>
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <ChildCard title="Click" codeModel={<ClickPopoverCode />}>
              <ClickPopover />
            </ChildCard>
          </Grid>
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <ChildCard title="Hover" codeModel={<HoverPopoverCode />}>
              <HoverPopover />
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>)
  );
};
export default MuiPopover;
