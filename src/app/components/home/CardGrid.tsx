// components/home/CardGrid.tsx
export default function CardGrid({
  items,
  columns,
}: {
  items: React.ReactNode[];
  columns: number;
}) {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {items}
    </div>
  );
}
