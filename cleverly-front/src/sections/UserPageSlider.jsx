import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'

import UserPageSliderWrapper from '../components/UserPageSlider/UserPageSliderWrapper'
import UserPageSliderTitle from '../components/UserPageSlider/UserPageSliderTitle'
import UserPageSliderItem from '../components/UserPageSlider/UserPageSliderItem'
import userPageSliderData from '../data/en/userPageSliderData'
import SliderItemCover from '../components/UserPageSlider/SliderItemCover'
import SliderItemTitle from '../components/UserPageSlider/SliderItemTitle'
import AdminPageAddCategory from '../components/UserPageSlider/AdminPageAddCategory'
import {CategoryContext} from '../context/CategoryContext'

import styled from '@emotion/styled'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {UserContext} from '../context/UserContext'

const UserPageStack = styled(Swiper)`
	width: 100%;
	position: static;

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 10px 10px 50px 10px;
	}

	${({theme}) => theme.breakpoints.between('md', 'lg')} {
		padding: 10px 0 50px 0;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		padding: 10px 10px 50px 10px;
	}

	& .swiper-slide {
		${({theme}) => theme.breakpoints.down('lg')} {
			max-width: 125px;
		}

		${({theme}) => theme.breakpoints.up('lg')} {
			max-width: 170px;
		}
	}

	& .swiper-pagination-bullet {
		background-color: ${({theme}) => theme.palette.accent.lightBlue};
		opacity: 1;

		&-active {
			background-color: ${({theme}) => theme.palette.primary};
			opacity: 1;
		}
	}

	& .swiper-button {
		&-prev,
		&-next {
			background-color: ${({theme}) => theme.palette.accent.lightBlue};
			width: 40px;
			height: 40px;
			border-radius: ${({theme}) => theme.borderRadius.circle};
			box-shadow: ${({theme}) => theme.boxShadow.icon};

			&:after {
				content: '';
				border-bottom: 2px solid ${({theme}) => theme.palette.primary};
				border-left: 2px solid ${({theme}) => theme.palette.primary};
				width: 11px;
				height: 11px;
			}
		}

		&-prev {
			left: -15px;
			transform: rotate(45deg);
		}

		&-next {
			right: -15px;
			transform: rotate(-135deg);
		}
	}
`

const UserPageSlider = () => {
	const {categories, loading} = React.useContext(CategoryContext)
	const {isAdmin} = React.useContext(UserContext)

	return (
		<UserPageSliderWrapper>
			{isAdmin ? <AdminPageAddCategory /> : null}
			<UserPageSliderTitle>
				{userPageSliderData.sliderTitle}
			</UserPageSliderTitle>
			{categories && !loading && (
				<UserPageStack
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView='auto'
					centerInsufficientSlides
					breakpoints={{
						768: {
							spaceBetween: 25
						},

						1536: {
							spaceBetween: 27
						}
					}}
					navigation
					pagination={{clickable: true}}>
					{categories?.map(({title, link, image, _id}) => (
						<SwiperSlide key={_id}>
							<UserPageSliderItem to={`/categories/${link}`}>
								<SliderItemCover>
									<img src={image} alt='category' />
								</SliderItemCover>
								<SliderItemTitle>{title}</SliderItemTitle>
							</UserPageSliderItem>
						</SwiperSlide>
					))}
				</UserPageStack>
			)}
		</UserPageSliderWrapper>
	)
}

export default UserPageSlider
