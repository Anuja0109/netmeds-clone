/* eslint-disable react/jsx-boolean-value */
import OwlCarousel from 'react-owl-carousel';
import VerticalCarouselStyle from './VeticalCarouselStyle';
import CImgOne from '../../assets/images/dr_vaidya_s_livitup_capsule_5_s_0.jpg';
import CImgTwo from '../../assets/images/dr_vaidya_s_livitup_capsule_5_s_1.jpg';
import CImgThree from '../../assets/images/dr_vaidya_s_livitup_capsule_5_s_2.jpg';

function VerticalCarousel() {
  const classes = VerticalCarouselStyle();
  return (
    <OwlCarousel
      className={classes.owlCarousel}
      navContainerClass={classes.owlNav}
      navClass={[classes.owlPrev, classes.owlNext]}
      items={3}
      loop={false}
      mouseDrag={false}
      touchDrag={false}
      pullDrag={false}
      rewind={true}
      autoplay={true}
      margin={0}
      nav={true}
    >
      <div className={classes.item}>
        {' '}
        <img src={CImgOne} alt="vertical-carousel" />{' '}
      </div>
      <div className={classes.item}>
        {' '}
        <img src={CImgTwo} alt="vertical-carousel" />{' '}
      </div>
      <div className={classes.item}>
        {' '}
        <img src={CImgThree} alt="vertical-carousel" />{' '}
      </div>
    </OwlCarousel>
  );
}

export default VerticalCarousel;
