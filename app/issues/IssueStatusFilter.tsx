"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams()

  const statuses: { label: string; value?: Status | "0" }[] = [
    { label: "All", value: "0" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <Select.Root
    defaultValue={searchParams.get('status') ?? '0'}
      onValueChange={(status) => {
        const params = new URLSearchParams()
        if(status) params.append('status', status)
        if(searchParams.get('orderBy')) params.append('orderBy', searchParams.get('orderBy')!)

        const query = status !== "0" && params.size !== 0 ? `?${params.toString()}` : "";
        router.push(`/issues${query}`);
      }}
    >
      <Select.Trigger placeholder="Filter By status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item value={status.value ?? "0"} key={status.value}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
