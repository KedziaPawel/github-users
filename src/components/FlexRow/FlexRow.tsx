import styled from 'styled-components';

interface FlexRowProps {
  direction?: string;
  justify?: string;
  align?: string;
  grow?: number;
}

export default styled.div`
  display: flex;
  flex-direction: ${(props: FlexRowProps) => props.direction || 'initial'};
  flex-grow: ${(props: FlexRowProps) => props.grow || 'initial'};
  justify-content: ${(props: FlexRowProps) => props.justify || 'initial'};
  align-items: ${(props: FlexRowProps) => props.align || 'initial'};
`;
