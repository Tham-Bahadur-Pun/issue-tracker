import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const summaries: { label: string; value: number; status: Status }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
    },
    {
      label: "In-Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
    },
  ];
  return (
    <Flex gap="4">
      {summaries.map((summary) => (
        <Card key={summary.label}>
          <Flex direction="column" gap="2">
            <Link
              className="text-sm font-medium"
              href={`/issues?status=${summary.status}`}
            >
              {summary.label}
            </Link>
            <Text className="font-bold">{summary.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
