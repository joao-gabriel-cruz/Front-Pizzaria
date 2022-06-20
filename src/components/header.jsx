function Header({ link, title, className, spaceYnav }) {
  return (
    <header className={className}>
      <div>
        <h1 className="titleHeader">{title.title}</h1>
      </div>
      <nav>
        <ul className="navHeader">
          {link.length > 0 &&
            link.map((link) => (
              <a
                style={{ marginLeft: spaceYnav }}
                className="linksHeader"
                key={link.name}
                href={link.link}
              >
                {link.name}
              </a>
            ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
