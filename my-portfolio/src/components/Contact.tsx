const Contact = ({ content }: { content: String }) => {
    return (
        <div style={{ maxWidth: '200px' }}>
            <h5 className="text-sm">{content}</h5>
        </div>
    )
}
export default Contact
