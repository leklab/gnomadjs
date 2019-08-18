import React from 'react'

import { ExternalLink, PageHeading } from '@broad/ui'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'

export default () => (
  <InfoPage>
    <DocumentTitle title="Contact" />
    <PageHeading>Contact</PageHeading>
    <p>
    <b>Program Management Office</b><br />
    Dr. Jonathan Kaltman, Project Scientist<br />
    Email: kaltmanj@mail.nih.gov<br /><br />
    <b>Consortium Steering Committee Chairs</b><br />
	Deepak Srivastava<br />
	 Email: dsrivastava@gladstone.ucsf.edu<br />
    </p>
    <br />
    <p>
	<b>PCGC Centers</b><br />
	Boston Children’s Hospital<br />
	 <i>PIs: Jane Newburger, Amy Roberts and Christine Seidman</i><br /><br />
	Gladstone Institute of Cardiovascular Disease and Stanford University School of Medicine<br />
	 <i>PIs: Deepak Srivastava and Daniel Bernstein</i><br /><br />
	Icahn School of Medicine at Mount Sinai<br />
	 <i>PI: Bruce Gelb</i><br /><br />
	University of Utah <br />
	<i>PIs: Martin Tristani-Firouzi and Joseph Yost</i><br /><br />
	Yale University<br />
	 <i>PIs: Martina Brueckner and Richard Lifton</i><br /><br />
    </p>

    <p>
    <b>Collaborating Sites and Core Facilities</b><br />
	Brigham and Women’s Hospital <br />
	<i>PI: Christine Seidman</i><br /><br />
	University of Rochester <br />
	<i>PI: George Porter</i><br /><br />
	Children’s Hospital of Los Angeles<br /> 
	<i>PI: Richard Kim</i><br /><br />
	The Children’s Hospital of Philadelphia <br />
	<i>PI: Elizabeth Goldmuntz</i><br /><br />
	Columbia University Medical Center <br />
	<i>PIs: Wendy Chung</i><br /><br />
	Coriell Institute for Medical Research <br />
	<i>PI: Nahid Turan</i><br /><br />
    </p>

  </InfoPage>
)
