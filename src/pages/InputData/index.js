import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './input-data.scss'

const InputData = () => {
	return (
		<div className='home-page-wrapper'>
			<div className='create-wrapper'>
				<Button title='create blog' />
			</div>
			<Gap height={20} />
			<div className='content-wrapper'>
				<BlogItem />
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
			<div className='pagination'>
				<Button title='Previous' />
				<Gap width={20} />
				<Button title='Next' />
			</div>
			<Gap height={20} />
		</div>
	)
}

export default InputData