import '../../css/Page.css';
function ScrollingPage({children}){
    return(<>
      <div className="ScrollingPage">
        {children}
      </div>
    </>);
  }
function PortfolioPage() {
    return(<>
        <ScrollingPage>
            <div class="page-grid-cell-fill-container">
                    
                <div class="page-grid-cell-fill-main">
                    <p class="title" style={{textAlign: 'center'}}>Sudoku</p>
                    <p>Sudoku written in C# in Unity Engine.</p>
                    <p>Initially, the game was designed for smartphones/touchscreen, but I slightly modified it to fit browsers. 
                        It includes Sudoku puzzle generation for the player to solve with scoring and mode selection menu.</p>
                    <p>Play Sudoku in the browser or <a href="https://github.com/factuall/Sudoku-Unity3D">Browse source code.</a></p>
                </div>
                <div class="page-grid-cell-fill-rest">
                    <div class="bottom-element">
                        <div onClick={console.log('')} class="button primary" style={{position: 'relative', margin:'auto', marginBottom: '5%'}}>
                            Run live demo
                        </div>
                        <div class="page-grid-cell-screens">
                            <img src="/live/sudoku2.png" style={{width: '100%', height: '100%'}}></img>
                            <img src="/live/sudoku1.png" style={{width: '100%', height: '100%'}}></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ScrollingPage>
        <ScrollingPage>
        <div className="page-grid-cell-fill-container">
            <div className="page-grid-cell-fill-main">
                <p className="title" style={{ textAlign: "center" }}>
                    Macro extension</p>
                <p>Browser extension for Chrome that can record your actions and perform them
                again for you.</p>
                <p>Idea was to simplify very repetitive and redundant tasks with automation.
                Below you can see showcase video with indev version.</p>
                <p><a href="https://github.com/factuall/Chrome-AUTO-TASK-Extension">Browse source code</a> or watch showcase video</p>
            </div>
            <div className="page-grid-cell-fill-rest">
                {/* <p style="text-align: center; font-size: 1.4em; text-decoration: underline;"></p> */}
                <div className="bottom-element">
                <div
                    onclick="watchVideo('extension')"
                    className="button primary"
                    style={{ position: "relative", margin: "auto", marginBottom: "5%" }}
                >
                    Watch video
                </div>
                <div
                    className="page-grid-cell-screens"
                    style={{ flexDirection: "column" }}
                >
                    <img
                    src="/live/clickhelper1.png"
                    style={{ position: "relative", width: "200%" }}
                    />
                </div>
                </div>
            </div>
        </div>

        </ScrollingPage>
        <ScrollingPage>
            <div className="page-grid-cell-fill-container">
                <div className="page-grid-cell-fill-main">
                <p className="title" style={{ textAlign: "center" }}>
                    This website
                </p>
                <p>Made with HTML/JS/SCSS.</p>
                <p>
                    Website is hosted with GitHub pages, so there is no backend.{" "}
                    <a href="https://github.com/factuall/factuall.github.io">
                    Browse source code.
                    </a>
                </p>
                <p>
                    Production/development branch is public and available for you here:{" "}
                    <a href="https://github.com/factuall/factuall.github.io/tree/dev">
                    Dev branch.
                    </a>
                </p>
                </div>
                <div className="page-grid-cell-fill-rest">
                {/* <p style="text-align: center; font-size: 1.4em; text-decoration: underline;"></p> */}
                <div className="bottom-element" style={{ width: "100%" }}>
                    <div style={{ textAlign: "center", marginBottom: "1%" }}>
                    fun fact: there is domain with one "L" redirecting to this one.
                    </div>
                    {/* <div onclick="openLive('sudoku/')" class="button" style="position: relative; margin:auto; margin-bottom: 5%;">Run live demo</div> */}
                    <div
                    className="page-grid-cell-screens"
                    style={{ flexDirection: "column" }}
                    >
                    <img src="/img/home.png" style={{ width: "100%" }} />
                    </div>
                </div>
                </div>
            </div>
        </ScrollingPage>
        <ScrollingPage>
            <div className="page-grid-cell-fill-container">
                <div className="page-grid-cell-fill-main">
                <p className="title" style={{ textAlign: "center" }}>
                    Optimizer EN-&gt;PL translation
                </p>
                <p>
                    Optimizer is an{" "}
                    <a href="https://github.com/hellzerg/optimizer">open-source</a>{" "}
                    application used to configure Windows for performance created by{" "}
                    <a href="https://github.com/hellzerg">helizerg</a>.{" "}
                </p>
                <p>
                    My translation from English to Polish made into software's official
                    master repository and it's now available in Polish
                </p>
                </div>
                <div className="page-grid-cell-fill-rest">
                <div className="bottom-element" style={{ width: "100%" }}>
                    <div
                    className="page-grid-cell-screens"
                    style={{ flexDirection: "column" }}
                    >
                    <img src="/img/optimizer.png" style={{ width: "100%" }} />
                    </div>
                </div>
                </div>
            </div>
        </ScrollingPage>
        <ScrollingPage>
            <div className="page-grid-cell-fill-container">
                <div className="page-grid-cell-fill-main">
                <p className="title" style={{ textAlign: "center" }}>
                    Alcohol Calculator
                </p>
                <p>
                    Easy way to figure out how much of actuall alcohol is in your specific
                    drink, and how much you pay for it. If you want to make the most of your
                    budget, save or control your alcohol intake - this website will come in
                    handy.
                </p>
                <p>
                    It's hosted on this website, so source code can be found inside of its
                    repo. (3rd portfolio entry)
                </p>
                </div>
                <div className="page-grid-cell-fill-rest">
                <div className="bottom-element" style={{ width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                        onclick="openLive('drinkcalc/')"
                        className="button primary"
                        style={{ position: "relative", margin: "auto", marginBottom: "5%" }}
                    >
                        English version
                    </div>
                    <div
                        onclick="openLive('drinkcalcpl/')"
                        className="button primary"
                        style={{ position: "relative", margin: "auto", marginBottom: "5%" }}
                    >
                        Polish version
                    </div>
                    </div>
                    <div
                    className="page-grid-cell-screens"
                    style={{ flexDirection: "column" }}
                    >
                    <img
                        src="/img/calc.png"
                        style={{ width: "70%", filter: "drop-shadow(0 0 0.3rem black)" }}
                    />
                    </div>
                </div>
                </div>
            </div>
        </ScrollingPage>

    </>);
}

export default PortfolioPage;