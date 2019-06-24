import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '@broad/ui'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'
import Link from './Link'
import Searchbox from './Searchbox'
import GnomadHeading from './GnomadHeading'

const HomePage = styled(InfoPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 740px;
  margin-top: 90px;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`

const SubHeading = styled.h2`
  padding-top: 0;
  padding-bottom: 0;
  font-size: 1.2em;
  font-weight: lighter;
  letter-spacing: 2px;
  text-align: center;
`

export default () => (
  <HomePage>
    <DocumentTitle />
    <HeadingContainer>
      <GnomadHeading width="60%" />
      <SubHeading>PCGC</SubHeading>
      <Searchbox width="100%" />
      <p>
        Examples - Gene:{' '}
        <Link preserveSelectedDataset={false} to="/gene/PCSK9">
          PCSK9
        </Link>
        , Variant:{' '}
        <Link preserveSelectedDataset={false} to="/variant/1-55516888-G-GA">
          1-55516888-G-GA
        </Link>
      </p>
    </HeadingContainer>

    <p>
    PCGC place holder text
    </p>
  </HomePage>
)
