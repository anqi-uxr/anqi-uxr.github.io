import React from "react"

import SEO from "../components/common/seo"
import ProjectHeader from "../components/project/ProjectHeader"
import ProjectSummary from "../components/project/ProjectSummary"

import data from "../data/chaione-data"

import "../styles/project.scss"
import "../styles/chaione.scss"
import ThreeColumn from "../components/common/ThreeColumn"

const ChaiOne = () => (
  <div className="project">
    <SEO title={data.siteTitle} />
    <ProjectHeader header={data.header} />

    <div className="project-content chaione">
      <ProjectSummary summary={data.summary} />

      <div className="project-details">

        {/* Project Background */}
        <div className="section-block">
          <h1>1. Project Background</h1>

          <h2>Internship @ ChaiOne, Inc.</h2>
          <p>
            In Fall 2020, I completed a <i>part-time</i>, <i>remote</i> internship as a User Researcher at ChaiOne, Inc. ChaiOne is a pioneer agency in Houston, TX that provides design thinking-led digital solutions to industrial businesses.
          </p>
          <p>
            During my internship, I led a user research project for <i>Tenzing</i>, a newly launched free web-app that is designed for academic researchers.
          </p>

          <h2>The Product: Tenzing</h2>
          <i>What is Tenzing? Why does it matter?</i>
          <p>
            Tenzing is a free Web-App that <b>helps academic researchers track who did what in a research project</b>. It allows researchers to generate reports about the contribution of each team member on a project, for insertion into their manuscripts, and for publishers to potentially incorporate into article metadata. It is developed by a team of professors and graduate students in Australia and Europe. It was launched just 1 month prior to my internship.
          </p>
          <p>
            Tenzing is created under the broader vision of the <b>Open Science</b> movement in academia, which is a set of practices that increase the transparency and accessibility of scientific research.
          </p>
          <p>
            As part of the Open Science effort, Tenzing promotes <b>transparency</b> in authors' contributions and responsibilities by encouraging open discussion on individual roles and authorship assignments.
          </p>
        </div>

        {/* Research Objectives */}
        <div className="section-block">
          <h1>2. Research Objectives</h1>

          <h2>Stakeholder Goals</h2>
          <p>
            After meeting with the stakeholders (Tenzing team), I discovered that their primary goals at the time were two-fold:
          </p>
          <ul>
            <li>Ensure Tenzing is user friendly and easy to use</li>
            <li>Encourage academic researchers to use Tenzing and start using it early in the research process</li>
          </ul>

          <h2>Research Goals</h2>
          <p>
            I translated the two stakeholder goals into concrete research goals in order to guide my research process.
          </p>

          <h3>Goal 1:</h3>
          <p>
            Evaluate the usability of the current version web-app and provide improvement recommendations if need be
          </p>

          <h3>Goal 2:</h3>
          <p>
            Discover drivers for user adoption and targets for user base expansion
          </p>
        </div>

        {/* Research Process */}
        <div className="section-block">
          <h1>3. Research Process</h1>

          <p className="highlight medium">
            For this case study, I would like to focus on how I successfully delivered impactful results for the first goal which is,
          </p>

          <p className="highlight title">
            Goal 1: Evaluate & Improve Tenzing's usability
          </p>

          <h2>Research Questions</h2>
          <p>
            Recap: Tenzing’s main function is for researchers on the same research project to log each of their contributions and create outputs that are suitable for journal submission or other desired usage.
          </p>
          <p>
            The stakeholders want to encourage researchers to use Tenzing as part of the research management. Therefore, Tenzing should have <b>low learnability</b> and be free of blockers that discourage users from dropping out.
          </p>
          <p>
            The primary research question for this project is
          </p>
          <p className="highlight medium">
            Can users successfully log in individual contributions and create desired outputs by following the instructions provided on the web-app, without additional help?
          </p>

          <h2>Methods Selection</h2>
          <p>
            I decided to do a combination of <b>Heuristic Evaluation</b> and <b>Moderated Usability Testing</b> to assess the usability of the website.
          </p>
          <p>
            The reasons that I selected the combination of methods are:
          </p>

          <p className="highlight medium">
            1. Conducting Heuristic Evaluation first allows me to get <b>quick</b> first-round feedback to clients
          </p>
          <p>
            Since it takes time to recruit participants and conduct a usability test, a heuristic evaluation allows me to deliver quick results to external stakeholders, so that I could keep the stakeholders engaged in the process and set the right expectations. This is especially helpful when the stakeholders are external and not familiar with what a usability study entails.
          </p>

          <p className="highlight medium">
            2. Heuristic Evaluation helps me select the right tasks for Usability Testing
          </p>
          <p>
            Conducting heuristic evaluation prior to usability testing helps me understand the web-app in great detail so that I can create appropriate tasks that will exercise the entire interface, especially those areas where there may be vulnerabilities in usability.
          </p>

          <p className="highlight medium">
            3. Conducting a Heuristic Evaluation together with Usability Testing provides a more holistic evaluation of the web-app
          </p>
          <p>
            Since I might not be able to cover all the details of the web-app in usability testing time constraints. A heuristic evaluation can fill in the gaps on portions of the web-app that are not covered by the usability testing tasks.
          </p>

          <h2>Heuristic Evaluation</h2>
          <ul>
            <li>
              Used Nielson 10 Usability Heuristics as the criteria
            </li>
            <li>
              3 researchers individually evaluated the interface
            </li>
            <li>
              For every issue identified, each individual evaluator assigned a severity rating and an issue category
            </li>
          </ul>

          <h2>Usability Testing</h2>
          <h3>Recruitment</h3>
          <p>
            Tenzing’s target users are academic researchers including faculty researchers, graduate students and postdoctoral researchers. Recruitment messages were sent out through university network, 5 participants were recruited for the study in less than 1 week.
          </p>

          <h3>Study Design</h3>
          <p>
            Recap: The primary research question was Can users understand the instructions on the web-app and follow the instructions to log in research project contributions and generate desired report?
          </p>
          <p>
            To generate a desired report through Tenzing, a user has to complete four steps, which are:
          </p>
          <ol>
            <li>Create a blank Google spreadsheet from Tenzing’s template</li>
            <li>Fill in the spreadsheet and Save</li>
            <li>Upload the spreadsheet</li>
            <li>Generate and download the desired output report</li>
          </ol>
          <p>
            Instructions were already provided on the web-app as guidance for the users.
          </p>

          <p>
            Instead of presenting the participants with multiple tasks with each step as an individual task, I decided to provide them ONE overarching task on their own that encompassed all the steps.
          </p>
          <p className="highlight medium">
            Such design minimized hints given to the participants through task instructions and mimicked the real-world scenario when users are using the website on their own. It also allowed me to assess whether the instructions reflect user's mental flow.
          </p>
          <p>
            Moderated testing sessions were conducted remotely over Zoom. Participants were asked to think-aloud while completing the tasks.
          </p>
          <p>
            Participants were given verbal and written instructions including:
          </p>
          <ul>
            <li>an introductory scenario to a multi-step task</li>
            <li>a PDF that contains proxy information that they would need in order to complete the task (see image on the right)</li>
          </ul>

          <h3>Metrics & Measures</h3>
          <ThreeColumn>
            <div>
              <p>
                <b>Self-Reported Metrics</b>
              </p>
              <p>
                After the task was finished, participants were asked to rate:
              </p>
              <ul>
                <li><b>Single Ease of Use (SEQ)</b> for each of the four steps in order to assess the difficulty of each specific step, help identify which steps are the most challenging ones</li>
                <li><b>System Usability Scale (SUS)</b> for Tenzing in order to measure the subjective assessment of usability. Serve as a benchmark for future iterations.</li>
              </ul>
            </div>

            <div>
              <p>
                <b>Performance Metrics</b>
                <p>
                  The followings were collected to quantitatively assess the effectiveness and efficiency of Tenzing:
                </p>
                <ul>
                  <li><b>Success rate</b> on each step</li>
                  <li><b>Completion time</b> for each step</li>
                </ul>
              </p>
            </div>

            <div>
              <p>
                <b>Qualitative Measures</b>
                <p>
                  These were collected to identify user’s mental flow and pain points:
                </p>
                <ul>
                  <li><b>Path taken</b> to complete each step</li>
                  <li><b>Errors & Pauses</b></li>
                </ul>
              </p>
            </div>
          </ThreeColumn>

        </div>

      </div>
    </div>
  </div>
)

export default ChaiOne
