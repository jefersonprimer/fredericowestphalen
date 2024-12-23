// components/home/CardWithInnerCards.tsx
import Card from './Card';
import CardGrid from './CardGrid';
import InnerCard from './InnerCard';

export default function CardWithInnerCards({ title }: { title: string }) {
  // URLs das imagens para os InnerCards
  const images = [
    'https://via.placeholder.com/150?text=Image+1',
    'https://via.placeholder.com/150?text=Image+2',
    'https://via.placeholder.com/150?text=Image+3',
    'https://via.placeholder.com/150?text=Image+4',
  ];

  return (
    <Card className="flex-1 mx-2">
      <div className="text-center mb-4">{title}</div>
      <CardGrid
        items={images.map((imageUrl, idx) => (
          <InnerCard
            key={idx}
            title={`Card Interno ${idx + 1}`}
            imageUrl={imageUrl}
          />
        ))}
        columns={2}
      />
    </Card>
  );
}
