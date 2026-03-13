import Card from "./Card";

const ListCard = ({ anime }: any) => {
    return (
        <ul className="grid grid-cols-4 gap-6">
            {anime.map((item: any) => (
                <li key={item.mal_id}>
                    <Card anime={item} />
                </li>
            ))}
        </ul>
    );
};

export default ListCard;
