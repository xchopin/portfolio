import styles from './terminal.module.css';

const SPLASH = `                __ _    _ _ _     
  /\\/\\  _   _  / _\\ | _(_) | |___ 
 /    \\| | | | \\ \\| |/ / | | / __|
/ /\\/\\ \\ |_| | _\\ \\   <| | | \\__ \\
\\/    \\/\\__, | \\__/_|\\_\\_|_|_|___/
        |___/                     
`;

const SKILLS = {
    languages:
        'Java (Spring Boot), SQL (MySQL, MSSQL, PostgreSQL), NoSQL (MongoDB), JavaScript, TypeScript, HTML/CSS, Bash, PowerShell',
    messaging: 'Kafka (Confluent, Apache Avro), RabbitMQ, IBM MQ',
    testing: 'Mockito, JUnit, Test containers, Gatling (Scala), Postman/Newman',
    devops:
        'CI/CD (Concourse, GitHub Actions), Docker, Splunk, Dynatrace, SonarQube, VMware Tanzu, PCF, Linux, Git',
    architecture:
        'RESTful APIs, Microservices, Batch processing, Resilience patterns (circuit breaker, retry, etc.), Security (OAuth2, JWT, encryption, data obfuscation), pipelines (build, release, security scanning, QA automation), System Design',
    softskills:
        'Leadership, Collaboration, Code review, Mentorship, Presentation, Communication (French & English), SAFe/Agile methodologies, JIRA',
};

const Terminal = () => {
    return (
            <div
                className={styles.terminalWindow}
                role="region"
                aria-label="Terminal window showing skills"
            >
                <header className={styles.header}>
                    <nav className={styles.controls} role="toolbar" aria-label="Window controls">
                        <div className={styles.controlItemClose} aria-label="Close window"/>
                        <div className={styles.controlItemMinimize} aria-label="Minimize window"/>
                        <div className={styles.controlItemOpen} aria-label="Maximize window"/>
                    </nav>
                </header>

                <main className={styles.terminal}>
                    <div className={`${styles.line} ${styles.lineCommand}`}>
                        <pre>
                          <span className={styles.dollar}>xchopin@mbp ~ % </span>
                          <span className={styles.command}>./skills.sh</span>
                        </pre>
                    </div>
                    <div
                        className={`${styles.line}`}
                        style={{whiteSpace: 'pre-wrap', color: '#32c146', fontWeight: 600}}
                    >
                        {SPLASH}
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; Languages</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.languages}</pre>
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; Messaging Systems</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.messaging}</pre>
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; Testing</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.testing}</pre>
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; DevOps</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.devops}</pre>
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; Architecture & Security</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.architecture}</pre>
                    </div>

                    <div className={`${styles.line} ${styles.red}`}>
                        <pre>&gt; Soft Skills</pre>
                    </div>
                    <div className={styles.line}>
                        <pre>{SKILLS.softskills}</pre>
                    </div>

                    <div style={{margin: '1.5rem 0'}}>
                        <pre>
                          [####################<span className={styles.load}></span>    ]
                        </pre>
                    </div>

                    <div className={`${styles.prompt} ${styles.line}`}>
            <pre>
              <span className={styles.dollar}>xchopin@mbp ~ % </span>
              <span
                  contentEditable
                  className={styles.command}
                  role="textbox"
                  aria-label="Terminal command input"
                  spellCheck={false}
                  suppressContentEditableWarning={true}
                  style={{outline: 'none'}}
              />
              <span className={styles.pulse}>_</span>
            </pre>
                    </div>
                </main>
            </div>
    );
};

export default Terminal;
