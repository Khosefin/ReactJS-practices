import "./header.css"

export default function Header () {
  return (
    <div className="header">
    <div className="chap-header">
      <img className="menu" src="/img/icons/hamburger-menu.svg" />
      <img className="youtube" src="/img/icons/youtube-logo.svg" />
    </div>
    <div className="vasat-header">
      <input className="search-bar" type="text" placeholder="Search" />
      <button className="search-b">
        <img className="search" src="/img/icons/search.svg" />
      </button>
      <button className="voice-b">
        <img className="voice" src="/img/icons/voice-search-icon.svg" />
      </button>
    </div>
    <div className="rast-header">
      <img className="upload" src="/img/icons/upload.svg" />
      <img className="apps" src="/img/icons/youtube-apps.svg" />
      <div className="notif-d">
        <div className="notif-n">3</div>
        <img className="notif" src="/img/icons/notifications.svg" />
      </div>
      <img className="prof" src="/img/k1oul-18072022-0005.jpg" />
    </div>
  </div>
  )
  
}