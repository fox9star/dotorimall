import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/products/1"><li>1번상품</li></Link>
				<Link to="/products/2"><li>2번상품</li></Link>
			</ul>
		</>
	);
};

export default Main;