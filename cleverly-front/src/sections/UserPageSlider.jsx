import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'

import UserPageSliderWrapper from '../components/UserPageSlider/UserPageSliderWrapper'
import UserPageSliderTitle from '../components/UserPageSlider/UserPageSliderTitle'
import UserPageSliderItem from '../components/UserPageSlider/UserPageSliderItem'
import userPageSliderData from '../data/en/userPageSliderData'
import SliderItemCover from '../components/UserPageSlider/SliderItemCover'
import SliderItemTitle from '../components/UserPageSlider/SliderItemTitle'

import styled from '@emotion/styled'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
	return (
		<UserPageSliderWrapper>
			<UserPageSliderTitle>
				{userPageSliderData.sliderTitle}
			</UserPageSliderTitle>
			<UserPageStack
				modules={[Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView='auto'
				loop={true}
				centeredSlides='true'
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
				<SwiperSlide>
					<UserPageSliderItem>
						<SliderItemCover></SliderItemCover>
						<SliderItemTitle>Math</SliderItemTitle>
					</UserPageSliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<UserPageSliderItem>
						<SliderItemCover></SliderItemCover>
						<SliderItemTitle>Physics</SliderItemTitle>
					</UserPageSliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<UserPageSliderItem>
						<SliderItemCover></SliderItemCover>
						<SliderItemTitle>History</SliderItemTitle>
					</UserPageSliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<UserPageSliderItem>
						<SliderItemCover></SliderItemCover>
						<SliderItemTitle>Geography</SliderItemTitle>
					</UserPageSliderItem>
				</SwiperSlide>
				<SwiperSlide>
					<UserPageSliderItem>
						<SliderItemCover></SliderItemCover>
						<SliderItemTitle>English</SliderItemTitle>
					</UserPageSliderItem>
				</SwiperSlide>
			</UserPageStack>
		</UserPageSliderWrapper>
	)
}

export default UserPageSlider
