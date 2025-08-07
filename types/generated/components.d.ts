import type { Schema, Struct } from '@strapi/strapi';

export interface LandingPageSectionsAboutSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    secondHeading: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsAdventureSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_adventure_sections';
  info: {
    displayName: 'AdventureSection';
  };
  attributes: {
    adventures: Schema.Attribute.Component<'landing-page.adventures', true>;
    heading: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsCampTypeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_camp_type_sections';
  info: {
    displayName: 'campTypeSection';
  };
  attributes: {
    campTypes: Schema.Attribute.Component<'landing-page.camp-type', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsEnquirySection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_enquiry_sections';
  info: {
    displayName: 'EnquirySection';
  };
  attributes: {
    emailAddress: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsExploreTeamSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_explore_team_sections';
  info: {
    displayName: 'ExploreTeamSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    quote1: Schema.Attribute.String;
    quote2: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsFooterSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_footer_sections';
  info: {
    displayName: 'FooterSection';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    contactInfo: Schema.Attribute.Component<
      'landing-page.contact-info-props',
      false
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    knowMore: Schema.Attribute.Component<'landing-page.footer-props', true>;
    quickLinks: Schema.Attribute.Component<'landing-page.footer-props', true>;
    socialLinks: Schema.Attribute.Component<'landing-page.footer-props', true>;
  };
}

export interface LandingPageSectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    heroes: Schema.Attribute.Component<'landing-page.hero-props', true>;
  };
}

export interface LandingPageSectionsNavbarSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_navbar_sections';
  info: {
    displayName: 'NavbarSection';
  };
  attributes: {
    darkLogo: Schema.Attribute.String;
    darkLogoMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    logo: Schema.Attribute.String;
    logoMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    routeList: Schema.Attribute.Component<'landing-page.route-props', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageSectionsServiceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_service_sections';
  info: {
    displayName: 'ServiceSection';
  };
  attributes: {
    services: Schema.Attribute.Component<'landing-page.service-props', true>;
  };
}

export interface LandingPageSectionsStudioSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_studio_sections';
  info: {
    displayName: 'StudioSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Component<'shared.image-props', true>;
  };
}

export interface LandingPageSectionsTestimonialSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'landing-page.testimonial-props',
      true
    >;
  };
}

export interface LandingPageSectionsVideoTestimonialSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_sections_video_testimonial_sections';
  info: {
    displayName: 'VideoTestimonialSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    videoTestimonials: Schema.Attribute.Component<
      'landing-page.video-testimonial-props',
      true
    >;
  };
}

export interface LandingPageAdventures extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_adventures';
  info: {
    displayName: 'AdventureProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface LandingPageCampType extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_camp_types';
  info: {
    displayName: 'CampTypeProps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface LandingPageContactInfoProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_contact_info_props';
  info: {
    displayName: 'ContactInfoProps';
  };
  attributes: {
    address: Schema.Attribute.String;
    emailAddress: Schema.Attribute.String;
    phoneNumbers: Schema.Attribute.Component<'shared.phone-number-props', true>;
  };
}

export interface LandingPageFooterProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_footer_props';
  info: {
    displayName: 'FooterProps';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface LandingPageHeroProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_props';
  info: {
    displayName: 'HeroProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageRouteProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_route_props';
  info: {
    displayName: 'RouteProps';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface LandingPageServiceProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_service_props';
  info: {
    displayName: 'ServiceProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageTeamProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_team_props';
  info: {
    displayName: 'TeamProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface LandingPageTestimonialProps extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonial_props';
  info: {
    displayName: 'TestimonialProps';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

export interface LandingPageVideoTestimonialProps
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_video_testimonial_props';
  info: {
    displayName: 'VideoTestimonialProps';
  };
  attributes: {
    path: Schema.Attribute.String;
  };
}

export interface SharedDescriptionProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_description_props';
  info: {
    displayName: 'DescriptionProps';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface SharedEmailProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_props';
  info: {
    displayName: 'EmailProps';
  };
  attributes: {
    email: Schema.Attribute.String;
  };
}

export interface SharedImageProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_props';
  info: {
    displayName: 'ImageProps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPhoneNumberProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_phone_number_props';
  info: {
    displayName: 'PhoneNumberProps';
  };
  attributes: {
    number: Schema.Attribute.String;
  };
}

export interface SharedPointsProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_points_props';
  info: {
    displayName: 'PointsProps';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TabsFounderProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_founder_props';
  info: {
    displayName: 'FounderProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface TabsItenaryProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_itenary_props';
  info: {
    displayName: 'ItenaryProps';
  };
  attributes: {
    description: Schema.Attribute.Component<'shared.description-props', true>;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface TabsMainPointProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_main_point_props';
  info: {
    displayName: 'MainPointProps';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface TabsProgramProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_program_props';
  info: {
    displayName: 'ProgramProps';
  };
  attributes: {
    about: Schema.Attribute.Text;
    altitude: Schema.Attribute.String;
    bestTimeToVisit: Schema.Attribute.String;
    cancellation15to30DaysPrior: Schema.Attribute.Decimal;
    cancellation30DaysPrior: Schema.Attribute.Decimal;
    cancellation7to15DaysPrior: Schema.Attribute.Decimal;
    difficulty: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    exclude: Schema.Attribute.Component<'shared.points-props', true>;
    images: Schema.Attribute.Component<'shared.image-props', true>;
    include: Schema.Attribute.Component<'shared.points-props', true>;
    itenary: Schema.Attribute.Component<'tabs.itenary-props', true>;
    label: Schema.Attribute.String;
    minimumAge: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    pickUpPoint: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface TabsStudioSubTypeProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_studio_sub_type_props';
  info: {
    displayName: 'StudioSubTypeProps';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface TabsStudioTypeProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_studio_type_props';
  info: {
    displayName: 'StudioTypeProps';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    subTypes: Schema.Attribute.Component<'tabs.studio-sub-type-props', true>;
  };
}

export interface TabsTestimonialProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_testimonial_props';
  info: {
    displayName: 'TestimonialProps';
  };
  attributes: {
    comment: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePath: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

export interface TabsTestimonialSectionProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_testimonial_section_props';
  info: {
    displayName: 'TestimonialSectionProps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'tabs.testimonial-props', true>;
  };
}

export interface TabsValueProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_value_props';
  info: {
    displayName: 'ValueProps';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface TabsValuesDescriptionProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_values_description_props';
  info: {
    displayName: 'ValuesDescriptionProps';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface TabsVideoTestimonialProps extends Struct.ComponentSchema {
  collectionName: 'components_tabs_video_testimonial_props';
  info: {
    displayName: 'VideoTestimonialProps';
  };
  attributes: {
    path: Schema.Attribute.String;
  };
}

export interface TabsVideoTestimonialSectionProps
  extends Struct.ComponentSchema {
  collectionName: 'components_tabs_video_testimonial_section_props';
  info: {
    displayName: 'VideoTestimonialSectionProps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    videoTestimonials: Schema.Attribute.Component<
      'tabs.video-testimonial-props',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing-page-sections.about-section': LandingPageSectionsAboutSection;
      'landing-page-sections.adventure-section': LandingPageSectionsAdventureSection;
      'landing-page-sections.camp-type-section': LandingPageSectionsCampTypeSection;
      'landing-page-sections.enquiry-section': LandingPageSectionsEnquirySection;
      'landing-page-sections.explore-team-section': LandingPageSectionsExploreTeamSection;
      'landing-page-sections.footer-section': LandingPageSectionsFooterSection;
      'landing-page-sections.hero-section': LandingPageSectionsHeroSection;
      'landing-page-sections.navbar-section': LandingPageSectionsNavbarSection;
      'landing-page-sections.service-section': LandingPageSectionsServiceSection;
      'landing-page-sections.studio-section': LandingPageSectionsStudioSection;
      'landing-page-sections.testimonial-section': LandingPageSectionsTestimonialSection;
      'landing-page-sections.video-testimonial-section': LandingPageSectionsVideoTestimonialSection;
      'landing-page.adventures': LandingPageAdventures;
      'landing-page.camp-type': LandingPageCampType;
      'landing-page.contact-info-props': LandingPageContactInfoProps;
      'landing-page.footer-props': LandingPageFooterProps;
      'landing-page.hero-props': LandingPageHeroProps;
      'landing-page.route-props': LandingPageRouteProps;
      'landing-page.service-props': LandingPageServiceProps;
      'landing-page.team-props': LandingPageTeamProps;
      'landing-page.testimonial-props': LandingPageTestimonialProps;
      'landing-page.video-testimonial-props': LandingPageVideoTestimonialProps;
      'shared.description-props': SharedDescriptionProps;
      'shared.email-props': SharedEmailProps;
      'shared.image-props': SharedImageProps;
      'shared.media': SharedMedia;
      'shared.phone-number-props': SharedPhoneNumberProps;
      'shared.points-props': SharedPointsProps;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'tabs.founder-props': TabsFounderProps;
      'tabs.itenary-props': TabsItenaryProps;
      'tabs.main-point-props': TabsMainPointProps;
      'tabs.program-props': TabsProgramProps;
      'tabs.studio-sub-type-props': TabsStudioSubTypeProps;
      'tabs.studio-type-props': TabsStudioTypeProps;
      'tabs.testimonial-props': TabsTestimonialProps;
      'tabs.testimonial-section-props': TabsTestimonialSectionProps;
      'tabs.value-props': TabsValueProps;
      'tabs.values-description-props': TabsValuesDescriptionProps;
      'tabs.video-testimonial-props': TabsVideoTestimonialProps;
      'tabs.video-testimonial-section-props': TabsVideoTestimonialSectionProps;
    }
  }
}
