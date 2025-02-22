export default function Page() {
    return (
        <div className="wrapper">
            <div className="container mx-auto px-4">
                <p>
                    <b>To do list</b>
                </p>
                <ol>
                    <li>Resume (國健署/血液透析/PD)</li>
                    <li>i18n (cookie)</li>
                    <li>fix switch back home</li>

                    {/* <br /> */}
                    <li>Loading</li>
                    <li>Dark mode?</li>
                </ol>
            </div>
        </div>
    )
}
