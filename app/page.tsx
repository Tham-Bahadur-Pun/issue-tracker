import prisma from "@/prisma/client";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";

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
    <main className="p-5">
      <LatestIssue />
      <IssueSummary open={open} inProgress={inProgerss} closed={closed} />
      <IssueChart open={open} inProgress={inProgerss} closed={closed}/>
    </main>
  );
}
