import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });

  const inProgerss = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap='5'>
      <Flex direction='column' gap='5'>
        <IssueSummary open={open} inProgress={inProgerss} closed={closed} />
        <IssueChart open={open} inProgress={inProgerss} closed={closed} />
      </Flex>
      <LatestIssue />
    </Grid>
  );
}
