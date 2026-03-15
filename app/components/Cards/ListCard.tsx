import Card from "./Card";

const ListCard = ({ anime }: any) => {
    if (!anime || anime.length === 0) {
        return <p className="py-8 text-center">No anime found</p>;
    }

    return (
        <ul className="grid justify-center items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {anime.map((item: any) => (
                <li key={item.mal_id}>
                    <Card anime={item} />
                </li>
            ))}
        </ul>
    );
};

export default ListCard;
