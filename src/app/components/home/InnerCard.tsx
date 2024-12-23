export default function InnerCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="bg-gray-200 border border-gray-300 rounded-md p-4 text-center shadow-sm flex flex-col items-center">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-24 h-24 object-cover rounded-md mb-2"
        />
      )}
      <div>{title}</div>
    </div>
  );
}
