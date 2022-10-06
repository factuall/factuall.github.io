import imgEmail from "../../assets/email.gif"
function ContactPage(){
    return(
        <>
        <div className="page-grid" id="page-grid" style={{ position: "static" }}>
        <div className="page-grid-article-cell">
        <p className="page-title" style={{ textAlign: "center" }}>
            Contact me!
        </p>
        <div
            style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "1em"
            }}
        >
            <form
            action="https://formspree.io/f/mbjwajoj"
            method="POST"
            style={{ width: "60%" }}
            >
            <input
                type="email"
                name="email"
                className="text-input"
                placeholder="Email"
                style={{ width: "100%", display: "inline-block" }}
            />
            <textarea
                name="message"
                className="text-input"
                placeholder="Message"
                style={{
                width: "100%",
                resize: "none",
                height: "30vh",
                display: "block"
                }}
                defaultValue={""}
            />
            {/* your other form fields go here */}
            <button
                type="submit"
                className="button bottom-element"
                style={{ position: "relative", margin: "0.2em" }}
            >
                Send
            </button>
            </form>
        </div>
        <img
            src={imgEmail}
            style={{
            maxHeight: "40vh",
            display: "block",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
            }}
        />
        </div>
    </div>
    </>)
}
export default ContactPage;