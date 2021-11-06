import React from 'react'
import './intro.css'
import Me from '../../img/me.png'

const Intro = () => {
	return (
		<div className='i'>
			<div className='i-left'>
				<div className='i-left-wrapper'>
					<h2 className='i-intro'>Hello, My name is</h2>
					<h1 className='i-name'>Alvaro Domínguez</h1>

					<div className='i-title'>
						<div className='i-title-wrapper'>
							<div className='i-title-item'>Industrial Engineer</div>
							<div className='i-title-item'>Industrial Programmer</div>
							<div className='i-title-item'>Lorem Ipsum</div>
							<div className='i-title-item'>Dolor Sit Amet</div>
							<div className='i-title-item'>Amazon</div>
						</div>
					</div>
					<div className='i-desc'>
						I design and develop services for customers of all sizes,
						specializing in creating stylish, modern websites, web services and
						online stores.
					</div>
				</div>
			</div>
			<div className='i-right'>
				<div className='i-bg'></div>
				<img src={Me} alt='' className='i-img' />
			</div>
		</div>
	)
}

export default Intro
