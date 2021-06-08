/* eslint-disable import/prefer-default-export */
import BDImgOne from '../../assets/images/vlcc_radiance_pro_spf_30_pa_sunscreen_gel_50_gm_0_1.dib';
import BDImgTwo from '../../assets/images/biotique_bio_carrot_40_spf_uva_uvb_sunscreen_ultra_soothing_face_lotion_for_all_skin_types_190_ml_0.jpg';
import BDImgThree from '../../assets/images/vegetal_bio_spf_30_sunscreen_lotion_100_ml_0_0.dib';
import CEImgOne from '../../assets/images/sahyog_wellness_multi_function_non_contact_body_object_infrared_thermometer_0_1.dib';
import CEImgTwo from '../../assets/images/floh_sharp_hand_sanitizer_with_70_alcohol_spearmint_essential_oil_750_ml_0_0.dib';
import CEImgThree from '../../assets/images/indiklin_n95_face_mask_with_respirator_pack_of_3_0_1.dib';

export const bestDeals = {
  header: 'BEST DEALS ON',
  title: 'Sunscreen Lotions',
  subTitle: '',
  linkToViewAll: '/',
  products: [
    {
      name: 'VLCC Radiance Pro SPF 30 Pa+++',
      infoText: 'Mfr: Vlcc Health Care Ltd',
      strikePrice: '',
      offerPrice: 'Rs.265.00',
      image: BDImgOne,
      discount: '',
    },
    {
      name:
        'Biotique Bio Carrot 40+ SPF UVA/UVB Sunscreen Ultra soothing Face Lotion for All Skin Types 190 ml',
      infoText: 'Mfr: Bio Veda Action Research Company',
      strikePrice: 'Rs.450.00',
      offerPrice: 'Rs.369.00',
      image: BDImgTwo,
      discount: '18% OFF',
    },
    {
      name: 'Vegetal BIO SPF-30 Sunscreen Lotion 100 ml',
      infoText: 'Mfr: AMA HERBAL LABORATORATORIES',
      strikePrice: 'Rs.485.00',
      offerPrice: 'Rs.436.00',
      image: BDImgThree,
      discount: '10% OFF',
    },
  ],
};

export const covidEssentials = {
  header: 'STOCK UP',
  title: 'Covid Essentials',
  subTitle: '',
  linkToViewAll: '/',
  products: [
    {
      name:
        'Sahyog Wellness Multi Function Non-Contact Body & Object Infrared Thermometer',
      infoText: 'Mfr: Sahyog Wellness',
      strikePrice: 'Rs.8,999.00',
      offerPrice: 'Rs.1,979.78.00',
      image: CEImgOne,
      discount: '78% OFF',
    },
    {
      name:
        'Floh Sharp Hand Sanitizer with 70% Alcohol - Spearmint Essential Oil 750 ml',
      infoText: 'Mfr: Sharp Mint Limited',
      strikePrice: 'Rs.375.00',
      offerPrice: 'Rs.150.00',
      image: CEImgTwo,
      discount: '60% OFF',
    },
    {
      name: 'Indiklin N95 Face Mask with Respirator (Pack of 3)',
      infoText: 'Mfr: Rising Sun Enterprise',
      strikePrice: 'Rs.897.00',
      offerPrice: 'Rs.349.00',
      image: CEImgThree,
      discount: '61% OFF',
    },
  ],
};
