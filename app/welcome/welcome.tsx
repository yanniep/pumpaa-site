import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useState } from "react";
import{
  Navbar, Container, Nav, NavDropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import profile_icon from "../app/assets/icon.jpg";

export function Welcome({ message }: { message: string }) {
	return (
		<>
			{navbar()}
      {
        lang === "ZH" ? introductionZH() : introductionEN()
      }
      <section id="center">
        <div className="star">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200" width="200" height="200">
          <polygon points="0,-100 29.39,-40.45 95.11,-30.9 47.55,15.45 58.78,80.90 0,50 -58.78,80.9 -47.55,15.45 -95.11,-30.9 -29.39,-40.45" />
        </svg>
        </div>
        
      </section>
	  </>
	);
}

const resources = [
	{
		href: "https://reactrouter.com/docs",
		text: "React Router Docs",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		href: "https://rmx.as/discord",
		text: "Join Discord",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];

let lang = "ZH";
const updateLang = (changeLang: string) => {
  lang = changeLang;
};

function navbar(){
  const [language, setLangCode] = useState("");

  const changeLanguage = () => {
    setLangCode(language.trim() === "ZH" ? "EN" : "ZH");
    updateLang(language);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text onClick={changeLanguage} style={{cursor: "pointer"}}  >
          {
            language === "ZH" ? "中文" : "English"
          }
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

function introductionEN(){
  return (
    <div id="introduction" className="introduction">
      <h1>Hello, I'm Pumpaa, a 100% I-person(?)
      </h1>
	  <img className="profile_icon" src={profile_icon} alt="profile" width="200" height="200"/>
      <p>I'm from Hong Kong and a native speaker of Cantonese.<br/>
      I can understand English, Mandarin and a little bit of Japanese. Currently studying Italian on Duolingo<br/>
      Following are some of my favorite things that you may be interested in:
      </p>
        <ul className="center-list">
          <li>Holostars
            <ul className="holostars_list">
              <li>Hanasaki Miyabi</li>
              <li>Hizaki Gamma</li>
              <li>Machina X Flayon</li>
              <li>All Holostars' members</li>
            </ul>
          </li>
          <li>NU:Carnival
            <ul className="canival_list">
              <li>Kuya</li>
              <li>Rei</li>
              <li>Lin</li>
            </ul>
          </li>
          <li>Anime / Novel 
            <ul>
              <li>Natsume's Book of Friends</li>
              <li>EIGHTY SIX</li>
              <li>Omniscient Reader's Viewpoint</li>
              <li>Debut or Die</li>
            </ul>
          </li>
          <li>Cinnamoroll</li>
        </ul>
        <p>I'm open to any fandom, but I'm not good at chatting, a bit negative and you may find me a bit weird(?).<br/>
        Despite that, I'm still looking forward to communicating with friends who share the same interests.<br/>
        Nice to meet you!</p>
		<h2>By the way, I hate it when people say my oshi is bad without logic or evidence^^<br/>
    Not only my oshi, also others^^</h2>
    </div>
  );
}

function introductionZH(){  
  return (
    <div id="introduction" className="introduction">
      <h1>你好，我是純種I人(?)Pumpaa！</h1>
      <img className="profile_icon" src={profile_icon} alt="profile" width="200" height="200"/>
      <p>我是香港人，主使用講廣東話。<br/>
      另外我能理解英語、國語和一點點日語。目前在使用情勒鳥學習意大利文<br/>
      以下是一些我有坑的團體、角色和作品：
      </p>
        <ul className="center-list">
          <li>Holostars
            <ul className="holostars_list">
              <li>花咲みやび</li>
              <li>緋崎ガンマ</li>
              <li>Machina X Flayon</li> {/* マキナ・X・フレオン */}
              <li>所有Holostars成員</li>  
            </ul>
          </li>
          <li>NU:Carnival
            <ul className="canival_list">
              <li>玖夜</li>
              <li>歛</li>
              <li>環</li>
            </ul>
          </li>
          <li>動漫、小說
            <ul>
              <li>夏目友人帳</li>
              <li>86 -不存在的戰區-</li>
              <li>全知讀者視角</li>
              <li>得了不出道就會死的病</li>
            </ul>
          </li>
          <li>肉桂狗/大耳狗</li>
        </ul>
        <p>我不拒同擔，但不太會聊天，人有點負面，然後你可能會覺得我人有點奇怪(?)<br/>
        雖然如此，還是很期待能和同坑的朋友交流。<br/>
        還請多多指教！</p>
		<h2>對了，我最討厭別人沒有邏輯或證據地說我的推不好^^<br/>
    盲黑別人推我也很討厭^^</h2>
    </div>
  );
}   

