"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const IssueStatusFilter = () => {
  const statuses: { label: string; value?: Status | "0" }[] = [
    { label: "All", value: "0" },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter By status" />
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
