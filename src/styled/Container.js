import styled from 'styled-components';

import media from './media';

const Container = styled.div`
  width: 100%;
  padding-right: ${(p) => {
    if (
      !p.theme
      || !p.theme.styledBootstrapGrid
      || !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  padding-left: ${(p) => {
    if (
      !p.theme
      || !p.theme.styledBootstrapGrid
      || !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 15;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  margin-right: auto;
  margin-left: auto;

  ${media.sm`
    ${p => console.log(p.theme)}
    max-width: ${p => p.theme.styledBootstrapGrid.getContainerMaxWidth('sm')}px;
  `}

  ${media.md`
    max-width: ${p => p.theme.styledBootstrapGrid.getContainerMaxWidth('md')}px;
  `}

  ${media.lg`
    max-width: ${p => p.theme.styledBootstrapGrid.getContainerMaxWidth('lg')}px;
  `}

  ${media.xl`
    max-width: ${p => p.theme.styledBootstrapGrid.getContainerMaxWidth('xl')}px;
  `}
`;

export default Container;
