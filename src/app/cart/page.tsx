import React from 'react'
import Container from "@/components/Container";
import Title from '@/components/Title';
import Cart from '@/components/Cart';
type Props = {}

const page = (props: Props) => {
	return (
		<Container>
			<Title title="Your cart"/>
			<Cart/>
		</Container>
	)
}

export default page