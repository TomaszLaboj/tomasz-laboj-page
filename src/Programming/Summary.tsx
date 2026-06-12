import { FaGithub } from "react-icons/fa"

const Summary = () => {
    const navigateToGithub = () => {
        window.open("https://github.com/TomaszLaboj")
    }
    return (
        <div className="text-paragraph">
            <p>
                I'm a full stack software engineer experienced in building complex scalable web applications.
            </p>
            <p className="padding-top-1 padding-bottom-1">
                My tech stack:
            </p>
            <ul>
                <li>
                    Languages: <strong>JavaScript, TypeScript, Java</strong>
                </li>
                <li>
                    Frontend: <strong>React, Redux, TanStack Query, HTML5, CSS3, Chakra UI</strong>
                </li>
                <li>
                    Backend: <strong>Java, Spring Boot, Node.js, Express, REST APIs, Kafka, Hibernate, JPA</strong>
                </li>
                <li>
                    Databases: <strong>PostgreSQL</strong>
                </li>
                <li>
                    Cloud & DevOps: <strong>AWS (exposure), GitLab CI/CD, Terraform (exposure)</strong>
                </li>
                <li>
                    Observability & Tools: <strong>Grafana, Prometheus, OpenSearch, Git, Linux, Jira</strong>
                </li>
                <li>
                    AI-assisted Tools: <strong>GitHub Copilot, Gemini CLI, Claude Code</strong>
                </li>
            </ul>
            <div className="padding-top-1 padding-bottom-1">
                <button className="button-github" onClick={navigateToGithub}>
                    <div className="button-text">
                        My GitHub repository
                        <div className="padding-1">
                            <FaGithub />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Summary;