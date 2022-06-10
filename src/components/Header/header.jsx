import './header.css';

function Header({ link, title }) {
console.log(link[0].name);



  return (
    <header className="headerComponet">
      <div>
        <h1 className='titleHeader'>{title.title}</h1>
      </div>
      <nav>
        <ul  className='navHeader'>
          {link.length > 0 &&
            link.map((link) => <a className='linksHeader' key={link.name} href={link.link}>{link.name}</a>)}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
