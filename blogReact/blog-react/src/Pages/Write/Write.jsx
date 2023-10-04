import "./Write.css"
export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                        </label>
                    <input type="file" id="fileInput" style={{ display: "none" }}></input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="New Post" type="text" className="WriteInputTxt" ></textarea>
                </div>
                <button className="writeSubmit">Share</button>

            </form>
        </div>
    )
}
