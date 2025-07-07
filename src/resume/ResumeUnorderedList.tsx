function ResumeUnorderedList({ items }: { items: string[] }) {
    return (
        <ul
            style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
            className="mt-2 space-y-1"
        >
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ResumeUnorderedList;
