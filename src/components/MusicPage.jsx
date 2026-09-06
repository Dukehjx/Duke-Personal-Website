import {
  Arrow,
  PageIntro,
  ResponsiveImage,
  SectionHeading,
} from "./SiteElements";

const performances = [
  {
    title: "ICS Got Talent",
    source: "/ICS Got Talent/Got Talent ",
    count: 4,
    description: "On stage with the school community.",
  },
  {
    title: "Banquet 2025",
    source: "/Banquet 2025/Banquet ",
    count: 3,
    description: "A soundtrack to a shared celebration.",
  },
  {
    title: "K-village Kids Show",
    source: "/K-village Kids Show/Kids Show ",
    count: 2,
    description: "Live music for a community charity event.",
  },
  {
    title: "Med Art Show",
    source: "/Med Art Show/Med Art ",
    count: 1,
    description: "Where music and the arts come together.",
  },
];
export default function MusicPage() {
  return (
    <div className="container">
      <PageIntro
        label="BEYOND THE KEYBOARD"
        title="Music & performance."
        actions={
          <a
            className="button button-primary"
            href="https://www.youtube.com/@dukeh0111"
          >
            Watch on YouTube
            <Arrow diagonal />
          </a>
        }
      >
        Drummer, arranger, and member of Jellyfish Jam Band. A collection of
        moments from the stage and the community.
      </PageIntro>
      <div className="credentials music-stats">
        <div>
          <span className="credential-label">CREATIVE PRACTICE</span>
          <p>
            100+ drum arrangements
            <span>Composed, transcribed, and adapted</span>
          </p>
        </div>
        <div>
          <span className="credential-label">LIVE PERFORMANCE</span>
          <p>
            25+ drum pieces<span>School and community events</span>
          </p>
        </div>
        <div>
          <span className="credential-label">CONNECTION</span>
          <p>
            700+ attendees<span>Across band performances</span>
          </p>
        </div>
      </div>
      <section tabIndex={-1} className="section" id="performances">
        <SectionHeading
          number="01"
          label="ON STAGE"
          title="Shared moments. Lasting memories."
        />
        <div className="performance-grid">
          {performances.map((performance) => (
            <article className="performance" key={performance.title}>
              <div
                className={
                  "performance-photos photo-count-" + performance.count
                }
              >
                {Array.from({ length: performance.count }, (_, i) => (
                  <ResponsiveImage
                    key={i}
                    source={performance.source + (i + 1)}
                    alt={
                      performance.title +
                      " — live performance, photo " +
                      (i + 1)
                    }
                    sizes={
                      performance.count === 1
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 50vw, 25vw"
                    }
                  />
                ))}
              </div>
              <h3>{performance.title}</h3>
              <p>{performance.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section tabIndex={-1} className="section">
        <SectionHeading
          number="02"
          label="LISTEN & WATCH"
          title="More from behind the kit."
        />
        <div className="channel-links">
          <a href="https://www.youtube.com/@dukeh0111">
            <span>
              YouTube<small>Duke Hu</small>
            </span>
            <Arrow diagonal />
          </a>
          <a href="https://space.bilibili.com/1878416700?spm_id_from=333.1007.0.0">
            <span>
              Bilibili<small>Dukehjx</small>
            </span>
            <Arrow diagonal />
          </a>
          <a href="https://www.douyin.com/user/MS4wLjABAAAAAsiWcyLVs2g-NBREDArnZwoJDSg6bnS9g9MmNv1MapQlYRXbU_HdsakxaMV2x5UJ?from_tab_name=main">
            <span>
              Douyin<small>dkh111.</small>
            </span>
            <Arrow diagonal />
          </a>
        </div>
      </section>
    </div>
  );
}
