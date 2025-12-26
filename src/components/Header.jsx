export default function Header() {
  return (
    <header className="header">
      <video autoPlay muted loop className="video-bg">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="header-content">
        <h1>Подари дом другу</h1>
        <p>Приют «Добрые лапы» помогает животным найти семью</p>
        <button>Хочу помочь</button>
      </div>
    </header>
  );
}
