"use client";

import Grid from "@mui/material/Grid";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";

import ComplexCard from "@/app/components/widgets/cards/ComplexCard";
import MusicCard from "@/app/components/widgets/cards/MusicCard";
import EcommerceCard from "@/app/components/widgets/cards/EcommerceCard";
import FollowerCard from "@/app/components/widgets/cards/FollowerCard";
import FriendCard from "@/app/components/widgets/cards/FriendCard";


import Settings from "@/app/components/widgets/cards/Settings";
import GiftCard from "@/app/components/widgets/cards/GiftCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Cards",
  },
];

const WidgetCards = () => {
  return (
    <PageContainer title="Cards" description="this is Cards">
      {/* breadcrumb */}
      <Breadcrumb title="Cards" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <ComplexCard />
        </Grid>
        <Grid item xs={12}>
          <EcommerceCard />
        </Grid>
        <Grid item xs={12}>
          <MusicCard />
        </Grid>
        <Grid item xs={12}>
          <FollowerCard />
        </Grid>
        <Grid item xs={12}>
          <FriendCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Settings />
        </Grid>
        <Grid item xs={12} lg={8}>
          <GiftCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetCards;
