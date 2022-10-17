import React from "react";
import Layout from "components/Layout";
import SliderFade from "components/slider/SliderFade";
import Section from "components/Section";
import News from "components/news/News";
import Banner from "components/banner/Banner";
import Tabs from "components/tabs/Tabs";
import ContactUs from "components/ContactUs";
import { BannerTheme } from "utils/enums";

function App() {
  return (
    <>
      <Layout>
        <SliderFade />
        <Section>
          <News />
        </Section>
        <Banner
          title={`we are. 9`}
          description={`Consectetur adipiscing elit.
        Nulla condimentum tortor sem.`}
          buttonText="THE PLAYERS >"
        />
        <Banner
          title={`we do.`}
          description={`Consectetur adipiscing elit.
        Nulla condimentum tortor sem.`}
          buttonText="THE PROJECTS >"
          reverse
          theme={BannerTheme.Light}
        />
        <Banner
          title={`careers.`}
          description={`Consectetur adipiscing elit.
          Nulla condimentum tortor sem.`}
          buttonText="THE POSITIONS >"
        />
        <Section>
          <Tabs />
        </Section>
        <ContactUs />
      </Layout>
    </>
  );
}

export default App;
