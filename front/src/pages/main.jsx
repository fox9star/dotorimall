import React, {useEffect} from 'react';
import { useState } from 'react';
//import { Link } from 'react-router-dom';
import styled from "styled-components";
import Layout from '../layouts/Layout';
import Axios from 'axios';
import Products from "../components/Products";


const ProductWrap = styled.div`
	width: 1120px;
	display: flex;
    gap: 40px 2%;
	margin: 72px auto;
  flex-wrap: wrap;
  justify-content: center;  

	article {
		width:32%;

		.product_img {
			width: 100%;
			max-height: 260px;
			margin-bottom:18px;

			img {
				width:100%;
				height: 215px;
				object-fit: cover;
			}
		}

		.product_title {
			margin-bottom:6px;
			font-weight:bold;
			font-size:16px;

		}
	}
`

const Main = () => {
    //console.log("ddd")

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		Axios.get('https://dummyjson.com/products')
		.then((response) => {
		  setProducts(response.data.products);
		  setLoading(false);
		});
	}, [setProducts])

	
 
	return (
		<Layout>
            <ProductWrap>
			<Products products={products} loading={loading} />
		    </ProductWrap>
        </Layout>
        
	);
};

export default Main;