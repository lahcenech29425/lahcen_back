import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksExploreSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_explore_sections';
  info: {
    displayName: 'ExploreSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    fetchCondition: Schema.Attribute.Enumeration<
      ['isFeatured', 'popular', 'new-arrivals']
    >;
    fetchCount: Schema.Attribute.Integer;
    itemType: Schema.Attribute.Enumeration<
      ['products', 'categories', 'blogs', 'quran-images', 'hadith-images']
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_sections';
  info: {
    description: 'Simple section with badge, title, description, button and image';
    displayName: 'FeatureSection';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'servicesSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'elements.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSlider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    allow_thumbnail: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Text;
    slider: Schema.Attribute.Component<'elements.slide', true>;
    timer: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_sections';
  info: {
    displayName: 'statsSection';
  };
  attributes: {
    stats: Schema.Attribute.Component<'elements.stat', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsAddress extends Struct.ComponentSchema {
  collectionName: 'components_elements_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.BigInteger;
    street: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    is_external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface ElementsMenu extends Struct.ComponentSchema {
  collectionName: 'components_elements_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface GlobalContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_global_contact_infos';
  info: {
    displayName: 'contactInfo';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    value: Schema.Attribute.String;
  };
}

export interface GlobalSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_global_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    is_active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'x', 'tiktok', 'youtube', 'whatsapp']
    >;
    url: Schema.Attribute.String;
  };
}

export interface OrdersOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_orders_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    quantity: Schema.Attribute.Integer;
    subtotal: Schema.Attribute.Decimal;
    unitPrice: Schema.Attribute.Decimal;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.explore-section': BlocksExploreSection;
      'blocks.feature-section': BlocksFeatureSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.slider': BlocksSlider;
      'blocks.stats-section': BlocksStatsSection;
      'elements.address': ElementsAddress;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.menu': ElementsMenu;
      'elements.service-item': ElementsServiceItem;
      'elements.slide': ElementsSlide;
      'elements.stat': ElementsStat;
      'global.contact-info': GlobalContactInfo;
      'global.social-link': GlobalSocialLink;
      'orders.order-item': OrdersOrderItem;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
