import React, {useState} from 'react';
import top from "../images/top.svg";
import "./scrollTop.sass";

const ScrollToTopBtn = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 500){
			setVisible(true)
		}
		else if (scrolled <= 500){
			setVisible(false)
		}
	};

	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div className="scroll_to_top_btn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
          <img src={top} />
        </div>
	);
}

export default ScrollToTopBtn;
