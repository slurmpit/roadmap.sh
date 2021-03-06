import { AboutHeaderWrap } from './style';
import siteConfig from "content/site";

const AboutHeader = () => (
  <AboutHeaderWrap>
    <div className="container container-small">
      <div className="author-info">
        <img className='author-img d-none d-sm-none d-md-block d-lg-block d-xl-block' src="/kamran.jpeg" />
        <div className="author-msg">
          <h2>Hello, I'm Kamran Ahmed.</h2>
          <p>I created <span className='flow-black'>roadmap.sh</span> to help developers find their path if they are confused and help them grow in their career.</p>
          <div className="author-links">
            <a href={`https://twitter.com/${siteConfig.twitter}`} target="_blank">@kamranahmedse</a>
            <a href="mailto:kamran@roadmap.sh">kamran@roadmap.sh</a>
          </div>
        </div>
      </div>
    </div>
  </AboutHeaderWrap>
);

export default AboutHeader;
