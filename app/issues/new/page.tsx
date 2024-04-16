import dynamic from "next/dynamic";
import { LoadingIssueForm } from "../_components/LoadingIssueForm";

const NewIssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => (<LoadingIssueForm/>)
});

const NewIssuePage = () => {
  return (
    <div>
      <NewIssueForm />
    </div>
  );
};

export default NewIssuePage;
