import Card from "../components/Card";
import ahmed from "../Data.json";

export default function Home() {
    console.log(ahmed);
    return (
        <div className="container">
            <div className="row">
                {ahmed.movies.map((item, index) => (
                    <Card
                        key={index}
                        imageUrl={item.Poster}
                        title={item.Title}
                        description={item.Description}
                    />
                ))}
            </div>
        </div>
    );
}
