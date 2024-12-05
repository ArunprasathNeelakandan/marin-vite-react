import "./header.css";

const Header = () => {

    const renderMenuItem = () => {
        const itemList = ['Home','About Us', 'Products', 'Services',]
        const element = itemList.map((each)=>{
            return <p key={each} className={`header-menu-item`}>{each}</p>
        })
        return element
    }

  return (
    <div className="header-bg-container">
        <div className="header-img-logo-container">
            <img src='http://uniquemarine.co.in/wp-content/uploads/2017/05/logo.jpg' className="header-img-logo"/>
        </div>
      <div className="header-menu-item-container">
        {renderMenuItem()}
      </div>
    </div>
  );
};

export default Header;
