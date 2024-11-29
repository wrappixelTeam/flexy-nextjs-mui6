import * as React from "react";
import Grid from "@mui/material/Grid2";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import ParentCard from "@/app/components/shared/ParentCard";
import TabIconLabel from "@/app/components/ui-components/tab/TabIconLabel";
import TabIconBottom from "@/app/components/ui-components/tab/TabIconBottom";
import TabIconLeft from "@/app/components/ui-components/tab/TabIconLeft";
import TabIconRight from "@/app/components/ui-components/tab/TabIconRight";
import TabScrollable from "@/app/components/ui-components/tab/TabScrollable";
import TabVertical from "@/app/components/ui-components/tab/TabVertical";
import TabIcon from "@/app/components/ui-components/tab/TabIcon";
import TabText from "@/app/components/ui-components/tab/TabText";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tabs",
  },
];

const MuiTabs = () => {
  return (
    (<PageContainer title="Tabs" description="this is Tabs">
      {/* breadcrumb */}
      <Breadcrumb title="Tabs" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Tabs">
        <Grid container spacing={3}>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Text */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabText />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabIcon />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon with Label */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabIconLabel />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Bottom */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabIconBottom />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Left */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabIconLeft />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Icon Right */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabIconRight />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Scrollable  */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabScrollable />
          </Grid>
          {/* ---------------------------------------------------------------------------------- */}
          {/* Vertical */}
          {/* ---------------------------------------------------------------------------------- */}
          <Grid
            display="flex"
            alignItems="stretch"
            size={{
              xs: 12,
              sm: 6
            }}>
            <TabVertical />
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>)
  );
};
export default MuiTabs;
