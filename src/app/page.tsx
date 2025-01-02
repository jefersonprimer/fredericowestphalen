import Card from './components/home/Card';
import CardGrid from './components/home/CardGrid';
import CardWithInnerCards from './components/home/CardWithInnerCards';

export default function Home() {
  // Função para renderizar os cards do grid com título e imagem
  const renderGridCards = (start: number, length: number) =>
    Array.from({ length }).map((_, idx) => (
      <div
        key={`card-${start + idx}`}
        className="bg-gray-200 rounded-lg w-[335px] h-[400px] flex flex-col items-center justify-center shadow-md"
      >
        <img
          src={`https://via.placeholder.com/200x100?text=Card+${start + idx}`}
          alt={`Card ${start + idx}`}
          className="rounded-t-lg w-full h-32 object-cover"
        />
        <div className="mt-2 text-center font-bold">Card {start + idx}</div>
      </div>
    ));

  // Função para renderizar os Cards Longos com 9 imagens
  const renderLongCards = (quantity: number) =>
    Array.from({ length: quantity }).map((_, idx) => (
      <Card key={`long-${idx}`} className="my-6">
        <div className="text-center mb-4">Card Longo</div>
        {/* Aqui estamos adicionando as 9 imagens lado a lado */}
        <div className="grid grid-cols-9 gap-1">
          {Array.from({ length: 9 }).map((_, imageIdx) => (
            <div key={`image-${imageIdx}`} className="flex justify-center">
              <img
                src={`https://via.placeholder.com/150x150?text=Imagem+${imageIdx + 1}`}
                alt={`Imagem ${imageIdx + 1}`}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Card>
    ));

  // Função para renderizar os Cards com 4 internos, dispostos lado a lado
  const renderCardsWithInnerCards = (quantity: number) =>
    Array.from({ length: quantity }).map((_, idx) => (
      <CardWithInnerCards key={`inner-${idx}`} title={`Card com Internos ${idx + 1}`} />
    ));

  // Função para renderizar os Cards Internos com título abaixo de cada imagem
  const renderInnerCards = (start: number, length: number) =>
    Array.from({ length }).map((_, idx) => (
      <div key={`inner-card-${start + idx}`} className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
        <img
          src={`https://via.placeholder.com/150x80?text=Interno+${start + idx}`}
          alt={`Card Interno ${start + idx}`}
          className="rounded-t-lg w-full h-24 object-cover"
        />
        <div className="text-center mt-2 font-semibold">Interno {start + idx}</div>
      </div>
    ));

  return (
    <div className="p-6">
      {/* Grid principal de 4 cards */}
      <CardGrid items={renderGridCards(1, 4)} columns={4} />
      
      <div className="my-6" />
      
      {/* Segundo Grid de 4 cards */}
      <CardGrid items={renderGridCards(5, 4)} columns={4} />
      
      {/* Card Grande com Círculos */}
      <Card className="mt-6">
        <div className="text-center mb-4">Card Grande com Círculos</div>
        <CardGrid
          items={Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={`circle-${idx}`}
              className="flex flex-col items-center justify-center w-32 h-32 bg-gray-200 rounded-full shadow-sm"
            >
              <img
                src={`https://via.placeholder.com/100x100?text=Círculo+${idx + 1}`}
                alt={`Círculo ${idx + 1}`}
                className="rounded-full w-24 h-24 object-cover"
              />
              <div className="mt-2 text-center">Círculo {idx + 1}</div>
            </div>
          ))}
          columns={6}
        />
      </Card>

      {/* Renderizando Cards Longos com 9 imagens */}
      {renderLongCards(2)}
      
      {/* Cards com 4 internos dispostos lado a lado */}
      <div className="flex flex-wrap justify-between">
        {Array.from({ length: 4 }).map((_, idx) => (
          <CardWithInnerCards key={`inner-${idx}`} title={`Card com Internos ${idx + 1}`} />
        ))}
      </div>

      {/* Repetindo os Cards Longos */}
      {renderLongCards(2)}

      {/* Repetindo os Cards com Internos */}
      <div className="flex flex-wrap justify-between">
        {Array.from({ length: 4 }).map((_, idx) => (
          <CardWithInnerCards key={`inner-${idx}`} title={`Card com Internos ${idx + 1}`} />
        ))}
      </div>

      {/* Renderizando os Cards Longos */}
      {renderLongCards(1)}
    </div>
  );
}
