export function Header({Score,HighScore})
{
    return <header>
    <h1>Yu Gi Oh! Memory Game</h1>
    <div className="header-score">
        <p>Score: {Score}</p>
        <p>High Score: {HighScore}</p>
    </div>
    </header>
}