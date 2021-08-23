import { Avatar } from '@coderscamp/ui/components/Avatar';
import { Center } from '@coderscamp/ui/components/Center';
import { VStack } from '@coderscamp/ui/components/Stack';
import { Typography } from '@coderscamp/ui/components/Typography';

import { CodersCampRole, Testimonial } from '../Testimonials.data';

const roles: Record<CodersCampRole, string> = {
  student: 'Uczestnik',
  mentor: 'Mentor',
  partner: 'Partner',
};

export const AboutTestimonialCard = ({ name, role, company, companyPosition, content, image }: Testimonial) => {
  const position = companyPosition && `${companyPosition}, ${company}`;

  return (
    <VStack spacing="32px" textAlign="center">
      <Typography size={{ base: 'md', sm: 'lg' }} color="gray.700">
        {content}
      </Typography>
      <VStack spacing="8px">
        <Avatar src={image} size="lg" />
        <Center flexDirection="column">
          <Typography size="lg" weight="medium" color="gray.900">
            {name}
          </Typography>
          {position && (
            <Typography size="md" weight="medium" color="gray.500">
              {position}
            </Typography>
          )}
          <Typography size="md" weight="normal" color="gray.500">
            {roles[role]}
          </Typography>
        </Center>
      </VStack>
    </VStack>
  );
};