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
      {/* <GnomadHeading width="60%" /> */}
      <img src="http://www.leklab.org/wp-content/uploads/2019/07/b2b_logo.png" width="50%" height="50%"></img>
      <SubHeading>Pediatric Cardiac Genomics Consortium (PCGC)</SubHeading>
      <Searchbox width="100%" />
      <p>
        Examples - Gene:{' '}
        <Link preserveSelectedDataset={false} to="/gene/SOX12">
          SOX12
        </Link>
        , Variant:{' '}
        <Link preserveSelectedDataset={false} to="/variant/1-55529215-C-A">
          1-55529215-C-A
        </Link>
      </p>
    </HeadingContainer>

    <p>
    The Pediatric Cardiac Genomics Consortium (PCGC) is a group of clinical research teams, collaborating to identify genetic causes of human congenital heart disease and to relate genetic variants present in the congenital heart disease patient population to clinical outcomes.
    </p>
  </HomePage>
)
