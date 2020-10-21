import React from 'react'
import {
	IconDua,
	IconLima,
	IconSatu,
	IconTiga,
	Logo,
	IconEnam,
	IconTujuh,
} from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
	return (
		<div className='icon-wrapper'>
			<img className='icon-medsos' src={img} alt='icon' />
		</div>
	)
}

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div>
					<img className='logo' src={Logo} alt='Logo' />
				</div>
				<div className='social-wrapper'>
					<Icon img={IconSatu} />
					<Icon img={IconDua} />
					<Icon img={IconTiga} />
					<Icon img={IconTujuh} />
					<Icon img={IconLima} />
					<Icon img={IconEnam} />
					{/* <img src={IconE} alt="github"/> */}
				</div>
			</div>
			<div className='copyright'>
				<p>Copyright</p>
			</div>
		</div>
	)
}

export default Footer
