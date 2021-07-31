export default function Card({ imageUrl, title, description }) {
    return (
        <div className="card" style={{ width: "18rem", margin: "2rem" }}>
            <img className="card-img-top" src={imageUrl} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {description && (
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                )}
            </div>
        </div>
    );
}
