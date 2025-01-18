import React from "react";
import './Roadmap.css';

function Roadmap() {
  return (
    <div id="roadmap" className="roadmap-container">
      <h2>Roadmap</h2>
      
      <div className="roadmap-phase phase1">
        <h3>Calapes Token Team Partners to Support California Fire Relief and Food Bank Donations</h3>
        <p>The devastating wildfires across California have left countless families grappling with loss—loss of homes, loved ones, livelihoods, and security. As the Calapes Token Team, we stand with those affected by these tragic events and are committed to making a tangible difference during these challenging times.</p>
        <p>In collaboration with local food banks and community organizations, the Calapes Team is launching a California Fire Relief Initiative, aiming to provide direct support to impacted families and first responders. Our efforts focus on supplying essential resources, including food, water, and financial aid, to those who need them most.</p>
      </div>

      <div className="roadmap-phase phase2">
        <h3>Addressing the Issues Beyond the Flames</h3>
        <ul>
          <li><strong>Water Mismanagement:</strong> California’s water resources, a vital tool for wildfire prevention and management, have been misallocated or poorly managed for decades. Outdated policies, over-reliance on agricultural subsidies, and delayed infrastructure upgrades have left communities vulnerable. The state must prioritize long-term water management reforms to ensure that resources are available to combat and prevent future wildfires.</li>
          <li><strong>Insurance Companies Leaving Residents Behind:</strong> In the aftermath of these fires, many families face additional heartbreak as insurance companies deny claims or withdraw coverage in high-risk areas. The lack of affordable and accessible insurance leaves countless families without the financial safety net they desperately need. This systemic failure exacerbates the hardships of those already struggling to rebuild their lives.</li>
        </ul>
      </div>

      <div className="roadmap-phase phase3">
        <h3>How Calapes Token Will Help</h3>
        <ul>
          <li><strong>Charity Donations:</strong> A portion of our transaction fees and token allocations will be directed to trusted organizations, such as local food banks and fire relief charities, ensuring resources are funneled to affected families.</li>
          <li><strong>Community Outreach:</strong> Partnering with grassroots organizations to deliver food, clothing, and temporary housing solutions to displaced individuals and families.</li>
          <li><strong>Advocacy and Awareness:</strong> Collaborating with experts and advocates to highlight the critical issues of water resource mismanagement and insurance reform, pushing for policy changes to better protect California residents.</li>
        </ul>
      </div>

      <div className="roadmap-phase phase4">
        <h3>Join Us in Making a Difference</h3>
        <p>This is not just a Calapes Token initiative; it is a community effort. We invite our investors, partners, and supporters to join us in this mission. Together, we can help rebuild lives, raise awareness about systemic issues, and advocate for a safer and more secure future for all Californians.</p>
        <p>Your support can bring light and hope to families who have endured unimaginable loss. For more information on how to get involved or contribute, visit us at <a href="https://calapes.org">calapes.org</a> or email us at <a href="mailto:calapesTEAM@outlook.com">calapesTEAM@outlook.com</a>.</p>
        <p>Together, we can stand stronger than the flames.</p>
      </div>
    </div>
  );
}

export default Roadmap;
