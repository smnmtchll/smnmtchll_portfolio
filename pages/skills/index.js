import fetch from 'node-fetch';
import Layout from '../../components/main-layout';

const Skills = ({ skills }) => {
  return (
    <Layout>
      <ul>
        <li>
          <h1>I WORK WITH THESE TECHNOLOGIES:</h1>
        </li>
        {skills.map(skill => (
          <li key={skill.id}>
            <h1>
              <a href={skill.url} target="_blank">
                {skill.name}
              </a>
              <span className="divider">
                {skill.id < skills.length ? ` /` : ''}
              </span>
            </h1>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1 {
          color: rgba(229, 247, 241, 0.8) !important;
        }
        ul li {
          list-style: none;
          float: left;
        }
        ul li h1 a {
          color: rgba(229, 247, 241, 0.6) !important;
          text-decoration: none;
          border-bottom: 2px solid rgba(229, 247, 241, 0.8);
        }
        ul li h1 a:hover {
          color: rgba(229, 247, 241, 1) !important;
          cursor: pointer;
        }
        .divider {
          color: rgba(229, 247, 241, 0.8) !important;
          margin-right: 10px;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/skills`);
  const skills = await res.json();
  return {
    props: {
      skills,
    },
  };
}

export default Skills;
