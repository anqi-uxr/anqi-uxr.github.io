import React from "react"

import SEO from "../components/common/seo"
import ProjectHeader from "../components/project/ProjectHeader"
import ProjectSummary from "../components/project/ProjectSummary"

import hivetec_data from "../data/hivetec-data"
import hivetec1 from "../images/hivetec-1.jpeg"

import "../styles/project.scss"
import "../styles/hivetec.scss"

const HiveTec = () => (
  <div className="project">
    <SEO title={hivetec_data.siteTitle} />
    <ProjectHeader header={hivetec_data.header} />

    <div className="project-content hivetec">
      <ProjectSummary summary={hivetec_data.summary} />

      <div className="project-details">

        {/* Project Background */}
        <div className="section-block">
          <h1>1. Project Background</h1>
          <p>
            Honeybees are more than just honey. They are critical pollinators to one in every three bites of food we eat and contribute nearly $30 billion to US crop production alone. However, beekeepers in the U.S. lost an estimated 43.7% of the colonies in 2019 - 2020 (Bee Informed Partnership). HiveTec is developing an IoT beehive monitoring equipment that allows beekeepers to monitor beehives remotely on an APP, provides live updates of beehives’ health conditions, and assists beekeepers in preventing potential beehive distress and colony loss.
          </p>
          <p>
            I joined the team in December 2020. The team was in the process of building the first-generation MVP. My primary responsibility was to define specific product requirements and priorities for the MVP. My stakeholders were the CEO and the product UX team.
          </p>
        </div>


        {/* Research Objectives */}
        <div className="section-block">
          <h1>2. Research Objectives</h1>

          <h2>The Problem</h2>
          <p>
            Through a few stakeholder interviews with the CEO and the UX team, I discovered that the major requests are two-fold. On the business side, the CEO wanted to better understand our target users (hobbyist beekeepers) and what motivates a beekeeper to purchase a remote monitoring device. On the product side, the UX team would like to know what features should be on the APP and which ones should be prioritized.
          </p>

          <h2>Research Questions</h2>
          <p>
            I broke the stakeholder's needs into specific research questions to guide the research process. I categorized the research questions into three categories.
          </p>

          <h3>The Who</h3>
          <ul>
            <li>
              What are the characteristics of our target users (hobbyist beekeepers)?
            </li>
            <li>
              What differentiates hobbyist beekeepers from commercial beekeepers? What motivates them to become hobbyist beekeepers?
            </li>
          </ul>

          <h3>The Process and User Needs</h3>
          <ul>
            <li>
              How do hobbyist beekeepers typically monitor their beehives?
            </li>
            <li>
              What pieces of information do hobbyist beekeepers monitor and rely on to keep their bee colonies alive and healthy? How do they use those pieces of information?
            </li>
          </ul>

          <h3>The Technology</h3>
          <ul>
            <li>
              What are hobbyist beekeepers’ perspectives on using technology as an aid in beekeeping and why?
            </li>
          </ul>
        </div>


        {/* Process Section */}
        <div className="section-block">
          <h1>3. The Process</h1>

          <h2>Planning</h2>
          <p>
            I selected in-depth interviews and an online survey as my methodologies to answer the research questions above.
          </p>
          <p>
            I selected in-depth interviews as my primary approach to understanding the hobbyist beekeepers. The reasons for my decisions were:
          </p>

          <ul>
            <li>
              Interviews could provide an in-depth and empathic understanding of the beekeeper’s experiences, perceptions, and most importantly their motivations
            </li>
            <li>
              The study had to be remote due to the ongoing COVID-19 pandemic, field studies were not available. Remote interviews were as effective as in-person interviews
            </li>
            <li>
              Remote diary studies or remote observational studies weren’t realistic given the season (beekeepers don’t inspect their beehives in the winter). Interviews would be the best way to learn about beekeepers’ working processes
            </li>
            <li>
              Interviews were easy to recruit for and administer given a limited budget and a short time frame.
            </li>
          </ul>

          <p>I chose an online survey as my secondary method to collect quantifiable data on the demographic information of hobbyist beekeepers and attributes of their apiary (the place beehives are kept).</p>

          <h2>Recruitment Strategy</h2>
          <p>
            Study interviewees were recruited by directly contacting local bee clubs across the U.S. To ensure the sample was representative and comprehensive, I selected 5 states, covering all 5 agricultural beekeeping zones across the U.S. States that have a large number of honeybee colonies and hobbyist beekeepers populations were selected.
          </p>
          <p>
            The online survey was distributed through local bee clubs after relationships with bee club members were established.
          </p>

          <h2>Research Foundation</h2>
          <p>
            Prior to conducting the interviews, I spent one-week conducting secondary research on beekeeping and completed an online course on Beekeeping 101 provided by PennState Extension. The course prepared me with the fundamental knowledge and I was ready to talk to real beekeepers in their language.
          </p>

          <div class="img-container">
            <img src={hivetec1} />
            <h4>Figure 1: Prioritization Matrix</h4>
          </div>

          <h2>Analysis & Insights</h2>
          <p>
            **some details were omitted due to NDA agreements
          </p>

          <h3>Interviews</h3>
          <p>
            I interviewed 27 beekeepers through Zoom in 2 weeks. After data was collected, I aggregated all the data points onto a Miro board. I sorted and clustered similar data using affinity diagrams and identified themes of user needs. I used a prioritization matrix with two axes (value to user and effort by organization) to help prioritize user needs for the MVP.
          </p>

          <h3>Survey</h3>
          <p>
            I received 115 valid responses in 1 week. I used Excel to clean the survey data. used R as the primary analysis tool for the survey.
          </p>

          <h3>Key Insights</h3>
          <p>
            **some details were omitted due to NDA agreements
          </p>
          <p>
            I would like to highlight several interesting insights that I found:
          </p>

          <ul>
            <li>The Who</li>
            <ul>
              <li>Hobbyist beekeepers don’t keep bees for monetary reasons. They keep bees for fun.</li>
              <li>Most of them are fascinated by bees as a species. They raise bees to be closer to nature, contribute to the diversity, and always want to learn more about bees</li>
              <li>Hobbyist beekeepers tend to be older in age. Over one-third of our survey respondents were over 65 years-old. Over 90% were over 40 years-old.</li>
            </ul>
            <br />

            <li>The Process & User Needs</li>
            <ul>
              <li>The actual beehive monitoring processes that hobbyists conduct are not necessarily the best processes in theory (that are taught in class)</li>
              <li>There are several critical pieces of information that experienced beekeepers rely on to monitor the well-being of the bees. However, newbee beekeepers might have a hard time mastering and remembering those pieces of information</li>
              <li>(insights on user needs are omitted for NDA reasons)</li>
            </ul>
            <br />

            <li>Perspectives on Tech</li>
            <ul>
              <li>Hobbyist beekeepers are interested in purchasing technology as long as the technology provides trustworthy data</li>
              <li>Experienced beekeepers see remote monitoring technologies as secondary tools to help them learn more about bees. New beekeepers would like to use remote monitoring technologies as guidance.</li>
            </ul>
          </ul>
        </div>


        {/* Impact */}
        <div className="section-block">
          <h1>4. Impact</h1>
          <p>
            **some details were omitted due to NDA agreements
          </p>
          <p>
            I delivered my research findings through presentations in team meetings. Here was the major impact of my research:
          </p>
          <ul>
            <li>
              My research defined product requirements for the first-generation MVP including hardware functionalities, APP features, and use cases
            </li>
            <li>
              I reduced hardware production cost by identifying and prioritizing user needs and eliminating inefficient hardware features
            </li>
            <li>
              I preemptively reduced future user error and improved APP usability by highlighting accessibility as prioritization in product software design considering the age group of our target users
            </li>
            <li>
              I raised awareness of usability within the organization through collaborating directly with the CEO and including the CEO as an observer in the user interviews
            </li>
          </ul>
        </div>


        {/* Reflections */}
        <div className="section-block">
          <h1>5. Reflections</h1>
          <h2>
            Speak the Language
          </h2>
          <p>
            Be prepared for your audience. Getting brushed up on basic beekeeping knowledge and professional terms really helped pave the way to deeper conservations with beekeepers. Without knowing the beekeeping language, I wouldn’t be able to effectively understand the beekeeper’s working processes and emphasize with them. Understanding the language helped me facilitate my sessions efficiently and made building rapport with interviewees much easier.
          </p>
          <h2>Good Recruitment is Half the Success</h2>
          <p>
            Always recruit your participants wisely. I chose bee clubs as points of contact and ended up with very high response and participation rates. People who participate in clubs are almost guaranteed with high enthusiasm and willingness to share since bee clubs exist to spread beekeeping knowledge and build communities. They were eager to participate and were very willing to share their experiences and perspectives. Gathering information is much easier with “talkative” people.
          </p>
          <p>
            Another benefit of contacting bee clubs was the network effect. It is much easier to get in contact with other beekeepers in the club once an initial contact was established. This is also how I collected 115 responses for the survey in one week. It wouldn’t be possible without the established contact distributing the survey on our behalf. It also ensured that the survey data is trustworthy.
          </p>
          <h2>Engage the Stakeholders</h2>
          <p>
            I was very lucky that HiveTec has an emphasis on user research. Working directly with the CEO throughout the research process assured that my research was aligned with the business goals and the current stage needs. The CEO was also engaged in the interview sessions as an observer. Exposing the stakeholders in research processes accelerated the research insights delivery process.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default HiveTec
