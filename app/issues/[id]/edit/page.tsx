import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { LoadingIssueForm } from "../../_components/LoadingIssueForm";

const EditIssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingIssueForm />,
});

interface Props {
  params: { id: string };
}
const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <EditIssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
