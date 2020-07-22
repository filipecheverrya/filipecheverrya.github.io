import React from 'react';

import Title from '@components/Title';

import { Container, Paragraph, Image } from './styles';

function About() {
  return (
    <Container>
      <Title>About</Title>
      <Image src="/images/filipe.png" />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula vitae ligula et fringilla. Suspendisse potenti. Nam tempor id sem sed imperdiet. In vel ullamcorper arcu. Phasellus hendrerit sapien ut dapibus dictum. Fusce dapibus hendrerit velit at placerat. Nullam porttitor sem id purus sagittis, ac imperdiet leo euismod. Duis luctus leo erat, ac aliquam dolor euismod finibus. Nunc ac commodo neque. Integer non quam sit amet nisl venenatis sodales. In tincidunt, nibh at feugiat placerat, dolor ex rhoncus ipsum, tristique accumsan odio odio quis magna. Nullam vel nisl dignissim, placerat metus at, rutrum sapien. Maecenas eu lacinia nibh.
      </Paragraph>
      <Paragraph>
        Nulla vehicula tempus massa sed consectetur. Nulla sodales cursus enim a consectetur. Donec feugiat tortor eget sapien condimentum auctor. Aliquam eget pretium quam. Nullam convallis varius purus vel congue. Integer id luctus quam. Fusce finibus ipsum id est luctus, vitae luctus justo aliquet. Duis blandit purus eget accumsan rutrum. In eget finibus sem. Integer quis erat leo. 
      </Paragraph>
    </Container>
  );
}

export default About;