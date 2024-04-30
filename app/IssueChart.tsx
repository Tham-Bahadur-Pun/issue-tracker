"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  const issues: { label: string; value: number }[] = [
    {
      label: "OPEN",
      value: open,
    },
    {
      label: "IN PROGRESS",
      value: inProgress,
    },
    {
      label: "CLOSED",
      value: closed,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={issues}>
        <XAxis dataKey="label" />
        <YAxis />
        <Bar dataKey="value" barSize="60" style={{ fill: "var(--accent-9)" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IssueChart;
