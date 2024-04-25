"use client";
import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const assignUser = (userId: string) =>
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId === '0' ? null : userId,
      })
      .catch(() => {
        toast.error("Changes cannot be saved.");
      });

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId ?? "0"}
        onValueChange={assignUser}
      >
        <Select.Trigger placeholder="Assign...." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="0">UnAssigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>("/api/users");
      return data;
    },
    staleTime: 60 * 1000,
    retry: 3,
  });

export default AssigneeSelect;
