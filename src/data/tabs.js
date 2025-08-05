// tabData.js

const tabs = [
  {
    key: 'tab1',
    label: 'All',
    cards: [
      {
        image: `${process.env.PUBLIC_URL}/images/happening1.png`,
        title: 'All News',
        text: 'Eraaya lifeSpaces and its strategic acquisition with Ebix Inc. and EbixCash',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening2.png`,
        title: 'All News',
        text: 'All updates from various categories in one view.',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening3.png`,
        title: 'All News',
        text: 'Latest developments from the group.',
      },
    ],
  },
  {
    key: 'tab2',
    label: 'Media Releases',
    cards: [
      {
        image: `${process.env.PUBLIC_URL}/images/happening1.png`,
        title: 'Media Releases',
        text: 'Eraaya lifeSpaces and its strategic acquisition with Ebix Inc. and EbixCash',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening2.png`,
        title: 'Media Releases',
        text: 'New office inaugurated by top executives.',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening3.png`,
        title: 'Media Releases',
        text: 'Partnership with FinTech leaders announced.',
      },
    ],
  },
  {
    key: 'tab3',
    label: 'Spotlight Stories',
    cards: [
      {
        image: `${process.env.PUBLIC_URL}/images/happening1.png`,
        title: 'Spotlight Stories',
        text: 'Eraaya’s journey in reshaping the urban landscape.',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening2.png`,
        title: 'Spotlight Stories',
        text: 'Innovation and inspiration from across the teams.',
      },
      {
        image: `${process.env.PUBLIC_URL}/images/happening3.png`,
        title: 'Spotlight Stories',
        text: 'Celebrating employee success and community impact.',
      },
    ],
  },
];

export default tabs;
