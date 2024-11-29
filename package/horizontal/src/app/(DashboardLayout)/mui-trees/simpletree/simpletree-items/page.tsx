
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import React from "react";

import { Grid2 as Grid } from "@mui/material";
import BasicSimpleTreeView from "@/app/components/muitrees/simpletree/BasicSimpleTreeView";
import TrackitemclicksTree from "@/app/components/muitrees/simpletree/TrackitemclicksTree";

const BCrumb = [
    {
        to: "/",
        title: "Home",
    },
    {
        title: "SimpleTreeView ",
    },
];

const SimpleTreeView = () => {
    return (
        <PageContainer title="SimpleTreeView" description="this is SimpleTreeView ">
            <Breadcrumb title="SimpleTreeView" items={BCrumb} />
            <Grid container spacing={3}>

                <BasicSimpleTreeView />

                <TrackitemclicksTree />

            </Grid>
        </PageContainer>
    );
};

export default SimpleTreeView;
