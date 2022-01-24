import React from 'react';
import {
  Layout,
  PageHeader,
  Card,
  CardGrid,
} from '../../../components/hackshack';
import { communityContent } from '../../../data/CardData/PageContent';

const Community = () => {
  return (
    // eslint-disable-next-line max-len
    <Layout background="/img/hackshack/BackgroundImages/community-background.png">
      <PageHeader title="Community">
        <CardGrid>
          {communityContent.map((content) => (
            <Card
              key={content.title}
              alt={content.alt}
              background={content.background}
              title={content.title}
              logo={content.logo}
              desc={content.desc}
              label={content.label}
              link={content.link}
            />
          ))}
        </CardGrid>
      </PageHeader>
    </Layout>
  );
};

export default Community;