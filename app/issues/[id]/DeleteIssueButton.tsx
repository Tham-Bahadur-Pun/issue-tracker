'use client'
import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/issues/${issueId}/`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            disabled={isDeleting}
          >
            Delete Issue
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Title>Confirmation for Delete.</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete? This action cannot be undone.
          </AlertDialog.Description>

          <Flex mt="2" gap="2">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red"  onClick={onDelete}>Delete Issue</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

        <AlertDialog.Root open={error}>
          <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>This issue cannot be deleted.</AlertDialog.Description>
            <Button color="gray" variant="soft" mt='2' onClick={() => setError(false)}>Ok</Button>
          </AlertDialog.Content>
        </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
