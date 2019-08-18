import React from 'react'
import styled from 'styled-components'
import { ExternalLink, PageHeading } from '@broad/ui'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'

const Credits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;

  @media (max-width: 992px) {
    flex-direction: column;
    font-size: 16px;
  }
`

const CreditsSection = styled.div`
  width: calc(${props => props.width} - 15px);

  @media (max-width: 992px) {
    width: 100%;
  }
`

const ContributorList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  line-height: 1.5;

  ul {
    padding-left: 20px;
    margin: 0.5em 0;
    list-style-type: none;
  }
`

const PrincipalInvestigatorList = styled(ContributorList)`
  columns: 2;

  @media (max-width: 992px) {
    columns: 1;
  }
`

const FundingSourceList = styled(ContributorList)`
  li {
    margin-bottom: 1em;
  }
`

export default () => (
  <InfoPage>
    <DocumentTitle title="About PCGC" />
    <PageHeading id="about-pcgc">About PCGC</PageHeading>
    <p>
    The Pediatric Cardiac Genomics Consortium (PCGC) is a group of hospitals in the United States and England that conducts research studies in children with congenital or acquired heart disease. Congenital heart defects occur in approximately 40,000 infants in the US each year and are a major cause of infant death. Acquired heart disease can cause death and long-term disability.
    </p>
    <p>
    The PCGC was started in 2009 by the <ExternalLink href="https://www.nhlbi.nih.gov">National Heart, Lung, and Blood Institute</ExternalLink> to learn more about why children are born with heart disease. All of the centers carefully follow a study protocol. The PCGC centers use similar brochures and consent forms to share with families who may want to enter a study. Patient safety is a high priority when a study is being planned and done. (See <ExternalLink href="https://benchtobassinet.com/?page_id=111">“Ensuring Safety in PCGC Studies.”</ExternalLink>)
    </p>
    <p>
    PCGC nurses and doctors are skilled in the care of children with heart disease and in the conduct of clinical studies. They have had special training in doing research in ways that help to protect patients in a study. They also have training in how to conduct the specific PCGC studies and are sensitive to families with sick children. They can be a good resource for you as you decide whether to allow your child to enter a PCGC study.
    </p>
    <p>
    The PCGC is conducting large studies called <ExternalLink href="https://benchtobassinet.com/?page_id=133">CHD GENES</ExternalLink> and <ExternalLink href="https://benchtobassinet.com/?page_id=135">CHD Brain</ExternalLink> and Genes at <ExternalLink href="https://benchtobassinet.com/?page_id=119">10 clinical PCGC Centers</ExternalLink>
    </p>
    <p>
    The specific objectives of the PCGC are:
    <ul>
    <li>Gene discovery of a complete repertoire of genes responsible for congenital heart disease through genomic analyses including copy-number variation, genome-wide association studies, and whole-exome sequencing.</li>
    <li>Identification of mutations responsible for congenital heart disease in large numbers of patients through sequencing of known congenital heart disease candidate genes.</li>
    <li>Genotype/Phenotype correlation including long-term clinical follow-up of enrolled patients to determine how genetics influences the clinical outcome in congenital heart disease.</li>
    <li><b>CHD GENES Study :</b> To accomplish these goals, Consortium centers are recruiting individuals of all ages with congenital heart disease to obtain DNA as well as detailed phenotypic and clinical data, and will follow them over time to collect outcomes data. To learn more about this study, click on link for ‘CHD GENES’ below. The PCGC will use state-of-the-art genetic techniques to interrogate the genome for single nucleotide polymorphisms and structural variations and to conduct high-throughput, large-scale sequencing. The biological samples, which will remain linked to detailed clinical data, will continue to serve as a resource for long-term investigations into the genetic basis of pediatric cardiovascular disorders. The PCGC will significantly increase understanding of the causes and modifiers of pediatric cardiovascular pathology, and over time will enhance early detection, treatment and prevention of congenital heart disease in newborns, children, and adults.</li>
    </ul>
    </p>
    <p>
    For more information about research in the PCGC visit <ExternalLink href="https://benchtobassinet.com/?page_id=1544">here</ExternalLink>
    </p>

  </InfoPage>
)
