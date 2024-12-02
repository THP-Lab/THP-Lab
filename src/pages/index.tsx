import React from "react";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, {translate} from '@docusaurus/Translate';

import ShowcaseSearchBar from "./showcase/_componants/ShowcaseSearchBar";
import ShowcaseCards from "./showcase/_componants/ShowcaseCards";
import ShowcaseFilters from "./showcase/_componants/ShowcaseFilters";

const TITLE = translate({message: 'THP-Lab showcase'});
const DESCRIPTION = translate({message: 'List of projects people from THP-Lab are working on',});

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{ display: "flex", marginLeft: "auto" }}
          className="container"
        >
          <ShowcaseSearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
